const mongoose = require('mongoose');


const verify= new mongoose.Schema({
    MobileNo:{
        type : Number,
        required : true
    },
    Self:{
        type: String,
        required : true
    },
    socialMedia:{
        type :String,
        required : true
    },
    email:{
        type :String,
        required :true
    }
})

const verif = mongoose.model('verifys',verify);

module.exports = verif