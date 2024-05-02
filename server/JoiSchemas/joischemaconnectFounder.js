const Joi = require('joi');

const founderSchema = Joi.object({
    uniqueId: Joi.string().required(),
    userName: Joi.string().required(),
    heading: Joi.string().required(),
    discription: Joi.string().required(),
    siteimage: Joi.string().required(),
    connectNo: Joi.number().required(),
    founderImg: Joi.string().required(),
    founderName: Joi.string().required(),
    founderDetails: Joi.string().required(),
    socialMedia1: Joi.string().required(),
    socialMedia2: Joi.string().required()
});

const validateFounder = (data) => {
    return founderSchema.validate(data, { abortEarly: false });
};

module.exports = {
    founderSchema,
    validateFounder
};
