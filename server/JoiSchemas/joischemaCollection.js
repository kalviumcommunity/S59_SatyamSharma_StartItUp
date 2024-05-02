const Joi = require('joi');

const collectionSchema = Joi.object({
    uniqueId: Joi.string().required(),
    userName: Joi.string().required(),
    upvote: Joi.number().required(),
    image: Joi.string().required(),
    socialmedia1: Joi.string().required(),
    socialmedia2: Joi.string().required(),
    posts: Joi.array().items(Joi.object({
        heading: Joi.string(),
        subheading: Joi.string(),
        date: Joi.string(),
        description: Joi.string()
    }))
});

const validateCollection = (data) => {
    return collectionSchema.validate(data, { abortEarly: false });
};

module.exports = {
    collectionSchema,
    validateCollection
};
