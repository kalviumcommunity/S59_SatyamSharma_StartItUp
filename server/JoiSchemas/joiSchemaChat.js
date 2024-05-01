const Joi = require('joi')

const schemaChat = Joi.object({ 
    chat : Joi.string(),
})

const validatePostChat=(data)=>{
    return schema.validate(data,{abortEarly:false})
}

module.exports = {
    schemaChat,
    validatePostChat,
}