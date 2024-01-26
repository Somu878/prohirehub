const Joi = require("@hapi/joi");

const jobValidation = Joi.object({
  role: Joi.string().required().label("Job role"),
  salary: Joi.number().required().label("Salary"),
  company: Joi.string().required().label("Company name"),
  companyLogoUrl: Joi.string().required().label("Company logo URL"),
  companySize: Joi.string().required().label("Company Size"),
  location: Joi.string().required().label("Job location"),
  jobType: Joi.string()
    .valid("full-time", "part-time", "internship")
    .required()
    .label("Job type"),
  jobLocation: Joi.string()
    .valid("remote", "in-office", "hybrid")
    .required()
    .label("work location"),
  skillsRequired: Joi.array()
    .items(Joi.string())
    .min(1)
    .required()
    .label("Skills required"),
  jobDescription: Joi.string().required().label("Job description"),
  aboutCompany: Joi.string().required().label("About company"),
  otherinfo: Joi.string().required().label("Other information"),
  //   refUserId: Joi.string().required().label("Reference User ID"),
});

module.exports = { jobValidation };
