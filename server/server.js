const express = require('express');
const cors = require('cors')
const routes = require('./router');
const { connectDB, disconnectDB } = require('./db');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api', routes);

const port = 1300;

connectDB() 
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
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
