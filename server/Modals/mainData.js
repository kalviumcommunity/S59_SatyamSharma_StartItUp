const { boolean } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const mainData= new mongoose.Schema({
    uniqueId:{
        type: Schema.Types.ObjectId,
        ref: 'User',     },
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
    equityValue:{
        type :Number,  
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
    inventAsked:{
        type :Boolean
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
        type : Number
    },
    yourAsk:{
        type : Number
    },
    equityOffered:{
        type : Number
    },
    creditNote:{
        type :String,  
    },
    revenueStatus:{
        type : String
    },
    tokenization:{
        type : Boolean
    },
    tokenAmount:{
        type : Number
    },
    tokenLeft:{
        type : Number
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