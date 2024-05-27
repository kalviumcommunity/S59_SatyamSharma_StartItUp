const { required } = require('joi');
const mongoose = require('mongoose');


const verify= new mongoose.Schema({
    uniqueId:{
        type :String,
    },
    userId:{
        type :String,
    },
    mobileNo:{
        type : Number,
    },
    nam:{
        type: String
    },
    self:{
        type: String,
    },
    tagline:{
        type: String,
    },
    likes:{
        type: Number,
    },
    blogPost: [{
        date: {
            type: String,
        },
        topic: {
            type: String,
        },
        subHeading: {
            type: String,
        },
        description: {
            type: String,
        }
    }],
    socialInsta:{
        type :String,
    },
    socialLinked:{
        type :String,
    },
    email:{
        type :String,
    },
    usersLiked:{
        type:[String]
    },
    picture:{
        type :String,
    },
    idProf:{
        type :String,
    }
})

const verif = mongoose.model('verifys',verify);

module.exports = verif