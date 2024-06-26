const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackSchema= new mongoose.Schema({
    uniqueId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName:{
        type : String
    },
    heading:{
        type : String
    },
    content:{
        type : String
    },
    type:{
        type : String
    },
    date:{
        type : String
    },
    status:{
        type : String
    },
    pic:{
        type : String
    },
    replyHead:{
        type: String
    },
    replyContext:{
        type: String
    }
})

const feedback = mongoose.model('feedbacks',feedbackSchema);
module.exports = feedback