const Joi = require("@hapi/joi");

const userValidation = Joi.object({
  name: Joi.string().required().label("Name"),
  email: Joi.string().email().required().label("Email"),
  mobileNumber: Joi.number().required().label("Mobile Number"),
  password: Joi.string().min(8).required().label("Password"),
});

module.exports = { userValidation };
