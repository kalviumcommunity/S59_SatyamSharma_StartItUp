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
        type :[String]
    },
    strikeButton:{
        type :String
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