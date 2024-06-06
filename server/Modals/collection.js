const mongoose = require('mongoose');
const { Schema } = mongoose;


const collectionSchema= new mongoose.Schema({
    uniqueId:{
        type: Schema.Types.ObjectId,
        ref: 'User',         
        required : true
    },
    userName:{
        type : String,
        required : true
    },
    upvote:{
        type : Number,
        required : true
    },
    image:{
        type : String,
        required : true
    },
    socialmedia1:{
        type : String,
        required : true
    },
    socialmedia2:{
        type : String,
        required : true
    },
    posts: [{
        heading: {
            type: String,
        },
        subheading: {
            type: String,
        },
        date: {
            type: String,
        },
        description: {
            type: String,
        }
    }],
    
})

const collect = mongoose.model('collections',collectionSchema);
module.exports = collect