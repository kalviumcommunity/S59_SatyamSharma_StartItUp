const mongoose = require('mongoose');

const mainData= new mongoose.Schema({
    company:{
        type : String,
        required : true
    },
    drive:{
        type: String,
        required : true
    },
    description:{
        type :String,
        required : true
    },
    founder:{
        type :String,
        required :true
    },
    userId:{
        type :String,
        required :true
    },
    investment:{
        type :Boolean
    },
    investmentAmount:{
        type :String
    },
    PaymentMode:{
        type :String
    },
    token:{
        type :Boolean
    },
    tokenValue:{
        type: Number
    },
    contact:{
        type :Boolean
    },
    contactDetails:{
        type :String
    },
    requestBox:{
        type: Boolean
    },
    requestBox:{
        type: String
    },
    reportIssue:{
        type: Boolean
    }
})

const mainDataThing = mongoose.model('mainDatas',mainData);

module.exports = mainDataThing