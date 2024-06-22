const Joi = require('joi');
const mongoose = require('mongoose');

const offerValidationSchema = Joi.object({
  uniqueId: Joi.string()
    .custom((value, helpers) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.message('Invalid ObjectId');
      }
      return value;
    })
    .required(),
  userName: Joi.string().min(3).max(50).required(),
  discount: Joi.string().min(1).max(10).required(),
  emailId: Joi.string().email().required()
});

module.exports = offerValidationSchema;
