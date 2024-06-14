const express = require('express');
const cors = require('cors');
const path =require('path')
const session = require('express-session');
const passport = require('passport');
const { createServer } = require('http');
const { Server } = require('socket.io');
const routes = require('./Routes/router');
const Authroutes = require('./Routes/Authroutes');
const PaymentRoutes = require('./Routes/paymentRoutes');
const verifyInvestorRoutes = require('./Routes/verifyInvestorRoutes'); 

const { connectDB, disconnectDB } = require('./db');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/investor', verifyInvestorRoutes);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/auth', Authroutes);
app.use('/pay', PaymentRoutes);

app.get("/pay/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

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
