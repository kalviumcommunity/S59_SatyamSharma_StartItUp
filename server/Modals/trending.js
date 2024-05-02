const mongoose = require('mongoose');

const trendingSchema= new mongoose.Schema({
    uniqueId:{
        type : String,
        required : true
    },
    subheading:{
        type : String,
        required : true
    },
    heading:{
        type : String,
        required : true
    },
    content:{
        type : String,
        required : true
    },
    image:{
        type : String,
        required : true
    },
    siteURL:{
        type : String,
        required : true
    },
})

const trend = mongoose.model('trendings',trendingSchema);
module.exports = trend