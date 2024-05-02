const Joi = require('joi');

const feedbackSchema = Joi.object({
    uniqueId: Joi.string().required(),
    userName: Joi.string().required(),
    heading: Joi.string().required(),
    content: Joi.string().required(),
    type: Joi.string().required(),
    date: Joi.string().required(),
    status: Joi.string().required()
});

const validateFeedback = (data) => {
    return feedbackSchema.validate(data, { abortEarly: false });
};

module.exports = {
    feedbackSchema,
    validateFeedback
};
