const Joi = require('joi')

const schemaChat = Joi.object({ 
    uniqueId: Joi.string().required(),
    userName: Joi.string().required(),
    heading: Joi.string().required(),
    upvote: Joi.number().required(),
    content: Joi.string().required(),
    strike: Joi.number().required()
})

const validatePostChat=(data)=>{
    return schema.validate(data,{abortEarly:false})
}

module.exports = {
    schemaChat,
    validatePostChat,
}