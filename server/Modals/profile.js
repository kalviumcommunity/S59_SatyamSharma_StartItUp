const { boolean } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const profileSchema= new mongoose.Schema({
    uniqueId:{
        type: Schema.Types.ObjectId,
        ref: 'User',     
    },
    name:{
        type : String    
    },
    founderConn:{
        type: [String]   
    },
    investorConn:{
        type : [String]    
    },
    totalLikes:{
        type : Number    
    },
    likePost:{
        type : [String]    
    },
    upvotes:{
        type : [String]    
    },
    strike:{
        type : [String]    
    },
    strikeOnPublic:{
        type : [String]    
    },
    isInvestor:{
        type:Boolean
    },
    isFounder:{
        type:Boolean
    },
    tokenization: [{
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        noOfItems: {
            type: Number,
        },
        tokenAmount: {
            type: Number,
        }
    }],

})

const profile = mongoose.model('profiles',profileSchema);
module.exports = profile