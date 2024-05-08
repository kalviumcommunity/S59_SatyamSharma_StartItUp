const Joi = require('joi');

const feedbackSchema = Joi.object({
    uniqueId: Joi.string(),
    userName: Joi.string(),
    heading: Joi.string(),
    content: Joi.string(),
    type: Joi.string(),
    date: Joi.string(),
    status: Joi.string(),
    pic: Joi.string(),
    replyHead: Joi.string(),
    replyContext: Joi.string()
});

const validateFeedback = (data) => {
    return feedbackSchema.validate(data, { abortEarly: false });
};

module.exports = {
    feedbackSchema,
    validateFeedback
};
