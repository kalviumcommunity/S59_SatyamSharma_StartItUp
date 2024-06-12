const mongoose = require('mongoose');
require('dotenv').config();


const public = require('../Modals/public');
const mainData = require('../Modals/mainData');
const verify = require('../Modals/verify');
const users = require('../Modals/user');
const profile = require('../Modals/profile');
const trending = require('../Modals/trending');
const feedback = require('../Modals/feedback');
const connectInv = require('../Modals/connectInves');
const connectFoun = require('../Modals/connectFound');
const collections = require('../Modals/collection');
const conversation = require('../Modals/conversation');


async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database connected successfully');

    } 
    catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}


async function deleteAllDocuments(model) {
    try {
        await model.deleteMany({});
        console.log(`All documents deleted from ${model.collection.collectionName}`);
    } catch (error) {
        console.error(`Error deleting documents from ${model.collection.collectionName}:`, error);
    }
}


async function deleteAllData() {

    await deleteAllDocuments(public);
    await deleteAllDocuments(mainData);
    await deleteAllDocuments(verify);
    await deleteAllDocuments(users);
    await deleteAllDocuments(profile);
    await deleteAllDocuments(trending);
    await deleteAllDocuments(feedback);
    await deleteAllDocuments(connectInv);
    await deleteAllDocuments(connectFoun);
    await deleteAllDocuments(collections);
    await deleteAllDocuments(conversation);

}


async function main() {

    await connectDB();
    await deleteAllData();
    mongoose.disconnect();
    console.log('Database disconnected');

}

main();
