const mongoose = require('mongoose');

const feedbackSchema= new mongoose.Schema({
    uniqueId:{
        type : String,
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
    content:{
        type : String,
        required : true
    },
    type:{
        type : String,
        required : true
    },
    date:{
        type : String,
        required : true
    },
    status:{
        type : String,
        required : true
    }
})

const feedback = mongoose.model('feedbacks',feedbackSchema);
module.exports = feedback