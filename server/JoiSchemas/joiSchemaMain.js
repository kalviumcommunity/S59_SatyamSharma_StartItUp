const Joi = require('joi')

const schemaMain = Joi.object({
    uniqueId: Joi.string(),
    userId: Joi.string(),
    driveLink: Joi.string(),
    date:Joi.string(),
    thumbnail: Joi.string(),
    startUpName: Joi.string(),
    description: Joi.string(),
    likeCount: Joi.number(),
    commentSection: Joi.array().items(Joi.string()),
    strikeButton: Joi.number(),
    founderName: Joi.string(),
    aboutYou: Joi.string(),
    image: Joi.string(),
    socialMedia: Joi.string(),
    currentEvaluation: Joi.string(),
    yourAsk: Joi.string(),
    equityOffered: Joi.string(),
    revenueStatus: Joi.string(),
    tokenization: Joi.boolean(),
    tokenAmount: Joi.string(),
    tokenLeft: Joi.string(),
    address: Joi.string(),
    contactNumber: Joi.number(),
    messageForInvestor: Joi.string(),
    previousInvestor: Joi.string(),
    jobRequest: Joi.string(),
    otherRequest: Joi.string(),
    yourProducts: Joi.string()
});

const validatePostMain=(data)=>{
    return schema.validate(data,{abortEarly:false})
}

module.exports = {
    schemaMain,
    validatePostMain,
}