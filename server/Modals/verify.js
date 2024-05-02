const mongoose = require('mongoose');


const verify= new mongoose.Schema({
    uniqueId:{
        type :String,
        required: true
    },
    mobileNo:{
        type : Number,
        required : true
    },
    self:{
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
    },
    idProf:{
        type :String,
        required :true
    }
})

const verif = mongoose.model('verifys',verify);

module.exports = verif