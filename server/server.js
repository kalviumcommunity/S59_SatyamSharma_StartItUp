const express = require('express');
const cors = require('cors');
const routes = require('./Routes/router');
const { connectDB, disconnectDB } = require('./db');
const Authroutes = require('./Routes/Authroutes');

const passport = require("passport");
const session = require("express-session");
require('dotenv').config();
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/auth', Authroutes);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User Connected",socket.id);

  socket.on("message",({message,room})=>{
     console.log(message);
     io.to(room).emit("recived",message)
  })

  socket.on("join-room",(room)=>{
    socket.join(room)
 })


  socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id)
  })



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
