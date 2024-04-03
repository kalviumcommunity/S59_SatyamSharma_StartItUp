const mongoose = require('mongoose');

const contentSchema= new mongoose.Schema({
    name:{
        type : String,
        required : true
    }
})

const family = mongoose.model('contents',contentSchema);
module.exports = family