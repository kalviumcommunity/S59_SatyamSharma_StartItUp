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
    inventAsked:Joi.boolean(),
    image: Joi.string(),
    socialMedia: Joi.string(),
    currentEvaluation: Joi.number(),
    yourAsk: Joi.number(),
    equityOffered: Joi.number(),
    creditNote: Joi.string(),
    revenueStatus: Joi.string(),
    tokenization: Joi.boolean().default(false),
    tokenAmount: Joi.number(),
    tokenLeft: Joi.number(),
    equityValue: Joi.number(),
    address: Joi.string(),
    contactNumber: Joi.string(),
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