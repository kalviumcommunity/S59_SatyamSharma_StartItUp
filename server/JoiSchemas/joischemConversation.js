const Joi = require('joi');

const conversationSchema = Joi.object({
    uniqueId: Joi.string().required(),
    userName: Joi.string().required(),
    date: Joi.date().required(),
    image: Joi.string().required(),
    time: Joi.date().required(),
    questionAsked: Joi.string().required(),
    answerGenerated: Joi.string().required(),
});

const validateConversation = (data) => {
    return conversationSchema.validate(data, { abortEarly: false });
};

module.exports = {
    conversationSchema,
    validateConversation
};
