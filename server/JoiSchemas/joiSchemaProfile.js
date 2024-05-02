const Joi = require('joi');

const boolean = Joi.boolean();

const profileSchema = Joi.object({
    uniqueId: Joi.string(),
    name: Joi.string(),
    founderConn: Joi.array().items(Joi.string()),
    investorConn: Joi.array().items(Joi.string()),
    totalLikes: Joi.number(),
    likePost: Joi.array().items(Joi.string()),
    upvotes: Joi.array().items(Joi.string()),
    strike: Joi.array().items(Joi.string()),
    strikeOnPublic: Joi.array().items(Joi.string()),
    isInvestor: boolean,
    isFounder: boolean,
    tokenization: Joi.array().items(Joi.object({
        id: Joi.string(),
        name: Joi.string(),
        noOfItems: Joi.number(),
        tokenAmount: Joi.number()
    }))
});

const validateProfile = (data) => {
    return profileSchema.validate(data, { abortEarly: false });
};

module.exports = {
    profileSchema,
    validateProfile
};
