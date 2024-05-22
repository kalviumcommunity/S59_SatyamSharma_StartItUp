const Joi = require('joi');

const schemaVerify = Joi.object({
    uniqueId: Joi.string(),
    userId:  Joi.string(),
    mobileNo: Joi.number(),
    self: Joi.string(),
    tagline: Joi.string(),
    likes: Joi.number(),
    blogPost: Joi.array().items(
        Joi.object({
            date: Joi.string(),
            topic: Joi.string(),
            subHeading: Joi.string(),
            description: Joi.string()
        })
    ),
    socialInsta: Joi.string(),
    socialLinked: Joi.string(),
    email: Joi.string(),
    picture: Joi.string(),
    nam:Joi.string(),
    usersLiked:Joi.array().items(Joi.string()),
    idProf: Joi.string()
});

const validatePostVerify = (data) => {
    return schemaVerify.validate(data, { abortEarly: false });
};

module.exports = {
    schemaVerify,
    validatePostVerify,
};
