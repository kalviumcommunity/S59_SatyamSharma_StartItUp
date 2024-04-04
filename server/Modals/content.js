const mongoose = require('mongoose');

const contentSchema= new mongoose.Schema({
    chat:{
        type : String,
        required : true
    }
})

const content = mongoose.model('contents',contentSchema);
module.exports = content