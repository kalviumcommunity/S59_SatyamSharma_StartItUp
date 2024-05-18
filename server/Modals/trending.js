const mongoose = require('mongoose');

const trendingSchema= new mongoose.Schema({
    uniqueId:{
        type : String,  
    },
    userId:{
        type : String,
    },
    date:{
        type : String,
    },
    subheading:{
        type : String,   
    },
    heading:{
        type : String,   
    },
    content:{
        type : String,   
    },
    image:{
        type : String,  
    },
    siteURL:{
        type : String,   
    },
    likeCount:{
        type : Number,   
    },
    strikeButton:{
        type : Number,   
    }
})

const trend = mongoose.model('trendings',trendingSchema);
module.exports = trend