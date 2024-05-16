const mongoose = require('mongoose');

const mainData= new mongoose.Schema({
    uniqueId:{
        type : String,
    },
    userId:{
        type : String,
    },
    driveLink:{
        type: String,
    },
    thumbnail:{
        type :String,
    },
    startUpName:{
        type :String,
    },
    date:{
        type :String,
    },
    description:{
        type :String,
    },
    likeCount:{
        type :Number
    },
    commentSection:{
        type :[String]
    },
    strikeButton:{
        type :Number
    },
    founderName:{
        type : String
    },
    aboutYou:{
        type : String
    },
    image:{
        type : String
    },
    socialMedia:{
        type : String
    },
    currentEvaluation:{
        type : String
    },
    yourAsk:{
        type : String
    },
    equityOffered:{
        type : String
    },
    revenueStatus:{
        type : String
    },
    tokenization:{
        type : Boolean
    },
    tokenAmount:{
        type : String
    },
    tokenLeft:{
        type : String
    },
    address:{
        type : String
    },
    contactNumber:{
        type : Number
    },
    messageForInvestor:{
        type : String
    },
    previousInvestor:{
        type : String
    },
    jobRequest:{
        type: String
    },
    otherRequest:{
        type: String
    },
    yourProducts:{
        type: String
    },
})

const mainDataThing = mongoose.model('mainDatas',mainData);

module.exports = mainDataThing