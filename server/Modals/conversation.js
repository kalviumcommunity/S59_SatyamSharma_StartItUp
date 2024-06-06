const mongoose = require('mongoose');
const { Schema } = mongoose;


const conversationSchema= new mongoose.Schema({
    uniqueId:{
        type: Schema.Types.ObjectId,
        ref: 'user',         
        required : true
    },
    userName:{
        type : String,
        required : true
    },
    date:{
        type : String,
        required : true
    },
    image:{
        type : String,
        required : true
    },
    time:{
        type : String,
        required : true
    },
    questionAsked:{
        type : String,
        required : true
    },
    answerGenerated:{
        type : String,
        required : true
    },
})

const conversation = mongoose.model('converstion',conversationSchema);
module.exports = conversation