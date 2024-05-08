const Joi = require('joi')

const schemaChat = Joi.object({ 
    uniqueId: Joi.string(),
    userName: Joi.string(),
    heading: Joi.string(),
    upvote: Joi.number(),
    content: Joi.string(),
    strike: Joi.number(),
    pic: Joi.string(),
    date: Joi.string(),
})

const validatePostChat=(data)=>{
    return schema.validate(data,{abortEarly:false})
}

module.exports = {
    schemaChat,
    validatePostChat,
}