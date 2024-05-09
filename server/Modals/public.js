const mongoose = require('mongoose');

const contentSchema= new mongoose.Schema({
    uniqueId:{
        type : String,
    },
    userName:{
        type : String,
    },
    heading:{
        type : String,
    },
    upvote:{
        type : Number,
    },
    content:{
        type : String,
    },
    strike:{
        type : Number,
    },
    pic:{
        type :String,
    },
    date:{
        type :String,
    }
})

const content = mongoose.model('contents',contentSchema);
module.exports = content