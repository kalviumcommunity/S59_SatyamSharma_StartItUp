const mongoose = require('mongoose');

const mainData= new mongoose.Schema({
    uniqueId:{
        type : String,
        required : true
    },
    driveLink:{
        type: String,
        required : true
    },
    thumbnail:{
        type :String,
        required : true
    },
    startUpName:{
        type :String,
        required :true
    },
    description:{
        type :String,
        required :true
    },
    likeCount:{
        type :Number
    },
    commentSection:{
        type :String
    },
    strikeButton:{
        type :String
    }
})

const mainDataThing = mongoose.model('mainDatas',mainData);

module.exports = mainDataThing