const mongoose = require('mongoose');
const { Schema } = mongoose;

const founderSchema= new mongoose.Schema({
    uniqueId:{
        type: Schema.Types.ObjectId,
        ref: 'User',         
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
    discription:{
        type : String,
        required : true
    },
    siteimage:{
        type : String,
        required : true
    },
    connectNo:{
        type : Number,
        required : true
    },
    founderImg:{
        type : String,
        required : true
    },
    founderName:{
        type : String,
        required : true
    },
    founderDetails:{
        type : String,
        required : true
    },
    socialMedia1:{
        type : String,
        required : true
    },
    socialMedia2:{
        type : String,
        required : true
    }
    
})

const founder = mongoose.model('founders',founderSchema);
module.exports = founder