const Joi = require('joi');

const trendingSchema = Joi.object({
    uniqueId: Joi.string().required(),
    subheading: Joi.string().required(),
    heading: Joi.string().required(),
    content: Joi.string().required(),
    image: Joi.string().required(),
    siteURL: Joi.string().uri().required()
});

const validateTrend = (data) => {
    return trendingSchema.validate(data, { abortEarly: false });
};

module.exports = {
    trendingSchema,
    validateTrend
};
