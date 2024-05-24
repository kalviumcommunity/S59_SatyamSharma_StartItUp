const Joi = require('joi');

const userSchema = Joi.object({
    userName: Joi.string().required(),
    emailId: Joi.string().email().required(),
    userId: Joi.string().required(),
    picture: Joi.string(),
    publishId: Joi.string(),
    investorId: Joi.string(),
    password: Joi.object({
        salt: Joi.string().required(),
        hash: Joi.string().required()
    }),
    otp: Joi.string()
});

const validateUser = (data) => {
    return userSchema.validate(data, { abortEarly: false });
};

module.exports = {
    userSchema,
    validateUser
};
