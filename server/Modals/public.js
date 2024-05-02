const mongoose = require('mongoose');

const contentSchema= new mongoose.Schema({
    uniqueId:{
        type : String,
        required : true
    },
    userName:{
        type : String,
        required : true
    },
    heading:{
        type : String,
        required : true
    },
    upvote:{
        type : Number,
        required : true
    },
    content:{
        type : String,
        required : true
    },
    strike:{
        type : Number,
        required : true
    },
})

const content = mongoose.model('contents',contentSchema);
module.exports = content