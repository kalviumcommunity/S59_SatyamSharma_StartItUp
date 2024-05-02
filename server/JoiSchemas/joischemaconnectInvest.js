const Joi = require('joi');

const investSchema = Joi.object({
    uniqueId: Joi.string().required(),
    userName: Joi.string().required(),
    heading: Joi.string().required(),
    discription: Joi.string().required(),
    image: Joi.string().required(),
    connectNo: Joi.number().required()
});

const validateInvestment = (data) => {
    return investSchema.validate(data, { abortEarly: false });
};

module.exports = {
    investSchema,
    validateInvestment
};
