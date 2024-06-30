const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const { createServer } = require('http');
const { Server } = require('socket.io');
const routes = require('./Routes/router');
const Authroutes = require('./Routes/Authroutes');
const PaymentRoutes = require('./Routes/paymentRoutes');
const verifyInvestorRoutes = require('./Routes/verifyInvestorRoutes');
const scheduleEmailJob = require('./Helper/scheduling');
const { connectDB, disconnectDB } = require('./db');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const { schema, root, pubsub } = require('./Controller/graphqlSchema');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const RedisStore = require('connect-redis').default;
const redisClient = require('./Helper/redisClient');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

const weeklyRateLimiter = rateLimit({
  windowMs: 7 * 24 * 60 * 60 * 1000,
  max: 5,
  message: 'You can only generate a discount coupon once per week.'
});

app.use((req, res, next) => {
  req.userIdentifier = req.sessionID;
  next();
});

const cache = (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;
  redisClient.get(key, (err, reply) => {
    if (reply) {
      res.send(JSON.parse(reply));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        redisClient.setex(key, 3600, JSON.stringify(body)); 
        res.sendResponse(body);
      };
      next();
    }
  });
};

app.use('/api/investor', verifyInvestorRoutes);
app.use('/api', routes);
app.use('/auth', Authroutes);
app.use('/pay', PaymentRoutes);

app.get("/pay/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.get('/discount-coupon', weeklyRateLimiter, cache, (req, res) => {
  const couponCode = `DISCOUNT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const discount = Math.floor(Math.random() * 50) + 1;
  res.status(200).json({ couponCode, discount: `${discount}%` });
});

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enables the GraphiQL interface
}));

app.post('/api/autocomplete', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post('https://api-inference.huggingface.co/models/gpt2', {
      inputs: prompt,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in generating autocomplete.');
  }
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  // Emit updated list of socket IDs to all clients
  io.emit("userList", Array.from(io.sockets.sockets.keys()));

  socket.on("message", ({ message, room }) => {
    console.log(message);
    if (room && io.sockets.adapter.rooms.has(room)) {
      io.to(room).emit("received", message);
    } else {
      console.log(`Room '${room}' does not exist or is empty.`);
    }
  });

  socket.on("join-room", (room) => {
    socket.join(room);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    io.emit("userList", Array.from(io.sockets.sockets.keys()));
  });
});

const subscriptionServer = SubscriptionServer.create(
  { execute, subscribe, schema },
  { server, path: '/graphql' }
);

connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    scheduleEmailJob();
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

process.on('SIGINT', async () => {
  console.log("Shutting down server...");
  await disconnectDB();
  subscriptionServer.close();
  redisClient.quit();
  process.exit(0);
});
