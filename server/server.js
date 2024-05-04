const express = require('express');
const cors = require('cors')
const routes = require('./Routes/router');
const { connectDB, disconnectDB } = require('./db');
const Authroutes= require('./Routes/Authroutes')
const app = express();
const passport= require("passport");
const session = require("express-session")
require('dotenv').config();


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
  
  app.use(passport.initialize());
  app.use(passport.session());

app.use(cors())
app.use(express.json());

app.use('/api', routes);
app.use('/auth',Authroutes);


connectDB() 
    .then(() => {
        app.listen(process.env.PORT, () => {
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
