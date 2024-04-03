require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Mongo Connected");
    } catch (err) {
        console.log("Connection Failed", err)
    }
}

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("MongoDB Disconnected");
    } catch (err) {
        console.log("Error disconnecting from MongoDB:", err);
    }
}

const checkConnected = () => {
    return mongoose.connection.readyState === 1;
}

module.exports = {
    connectDB,
    disconnectDB,
    checkConnected
}
