const Joi = require('joi')

const schemaVerify = Joi.object({
    MobileNo: Joi.number(),
    Self : Joi.string(),
    socialMedia: Joi.string(),
    email: Joi.string()
})

const validatePostVerify=(data)=>{
    return schema.validate(data,{abortEarly:false})
}

module.exports = {
    schemaVerify,
    validatePostVerify,
}