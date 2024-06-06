const mongoose = require('mongoose');
const { Schema } = mongoose;

const investSchema= new mongoose.Schema({
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
    image:{
        type : String,
        required : true
    },
    connectNo:{
        type : Number,
        required : true
    },
})

const invester = mongoose.model('connectInvs',investSchema);
module.exports = invester