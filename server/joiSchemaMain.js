const Joi = require('joi')

const schemaMain = Joi.object({
    company: Joi.string(),
    drive : Joi.string(),
    description: Joi.string(),
    founder: Joi.string(),
    userId : Joi.string(),
    investment: Joi.boolean(),
    investmentAmount: Joi.string(),
    PaymentMode: Joi.string(),
    token: Joi.boolean(),
    tokenValue : Joi.number(),
    contact: Joi.boolean(),
    contactDetails: Joi.string(),
    requestBox : Joi.boolean(),
    reportIssue: Joi.string(),
})

const validatePostMain=(data)=>{
    return schema.validate(data,{abortEarly:false})
}

module.exports = {
    schemaMain,
    validatePostMain,
}