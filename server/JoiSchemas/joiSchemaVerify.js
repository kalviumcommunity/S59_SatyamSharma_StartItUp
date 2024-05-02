const Joi = require('joi')

const schemaVerify = Joi.object({
    uniqueId : Joi.string().required(),
    mobileNo: Joi.number().required(),
    self: Joi.string().required(),
    socialMedia: Joi.string().required(),
    email: Joi.string().required(),
    idProf: Joi.string().required()
})

const validatePostVerify=(data)=>{
    return schema.validate(data,{abortEarly:false})
}

module.exports = {
    schemaVerify,
    validatePostVerify,
}