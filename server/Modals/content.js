const mongoose = require('mongoose');

const contentSchema= new mongoose.Schema({
    chat:{
        type : String,
        required : true
    }
})

const cont = mongoose.model('contents',contentSchema);
module.exports = cont