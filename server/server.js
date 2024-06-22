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
const { schema, root } = require('./Controller/graphqlSchema');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
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
  max: 1,
  message: 'You can only generate a discount coupon once per week.'
});

app.use((req, res, next) => {
  req.userIdentifier = req.sessionID;
  next();
});

app.use('/api/investor', verifyInvestorRoutes);
app.use('/api', routes);
app.use('/auth', Authroutes);
app.use('/pay', PaymentRoutes);

app.get("/pay/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.get('/discount-coupon', weeklyRateLimiter, (req, res) => {
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
  });
});

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
  process.exit(0);
});
