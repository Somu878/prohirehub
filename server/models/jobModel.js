const { required } = require("@hapi/joi");
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, "Job role is required"],
  },
  salary: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: [true, "Company name is required"],
  },
  companyLogoUrl: {
    type: String,
    required: [true, "Company logo URL is required"],
  },
  companySize: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: [true, "Job type is required"],
    enum: {
      values: ["full-time", "part-time", "internship"],
      message: "{VALUE} is not a valid job type",
    },
  },
  jobLocation: {
    type: String,
    required: [true, "Job location is required"],
    enum: {
      values: ["remote", "in-office", "hybrid"],
      message: "{VALUE} is not a valid job location",
    },
  },
  skillsRequired: {
    type: Array,
    required: [true, "At least 1 skill is required"],
  },
  jobDescription: {
    type: String,
    required: [true, "Job description is required"],
  },
  aboutCompany: {
    type: String,
    required: [true, "About company is required"],
  },
  otherinfo: {
    type: String,
    required: true,
  },
  refUserId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Job = mongoose.model("Job", jobSchema, "jobData");

module.exports = Job;
