const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema= new mongoose.Schema({
    uniqueId:{
        type: Schema.Types.ObjectId,
        ref: 'user' 
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
    },
    usersLiked:{
        type:[String]
    },
    usersStriked:{
        type:[String]
    }
})

const content = mongoose.model('contents',contentSchema);
module.exports = content