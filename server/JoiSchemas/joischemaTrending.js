const Joi = require('joi');

const trendingSchema = Joi.object({
    uniqueId: Joi.string(),
    userId: Joi.string(),
    date: Joi.string(),
    subheading: Joi.string(),
    heading: Joi.string(),
    content: Joi.string(),
    image: Joi.string(),
    siteURL: Joi.string(),
    likeCount: Joi.number(),
    strikeButton: Joi.number()
});

const validateTrend = (data) => {
    return trendingSchema.validate(data, { abortEarly: false });
};

module.exports = {
    trendingSchema,
    validateTrend
};
