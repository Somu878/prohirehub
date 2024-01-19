const express = require("express");
const authorization = require("../middlewares/authMiddleware");
const Job = require("../models/jobModel");
const User = require("../models/userModel");
const { jobValidation } = require("../validations/jobSchema");
const jobrouter = express.Router();
jobrouter.use(express.json());
jobrouter.use(authorization);
jobrouter.post("/createjob", async (req, res) => {
  try {
    const result = await jobValidation.validateAsync(req.body);
    const newjob = new Job({
      ...result,
      refUserId: req.userId,
    });
    await newjob.save();
    res.status(201).send("New job created");
  } catch (error) {
    console.error(error.details);
    res
      .status(400)
      .json({ error: "Validation failed", details: error.details });
  }
});
jobrouter.get("/jobdata", async (req, res) => {
  try {
    const data = await Job.findOne({ refUserId: req.userId });
    if (!data) {
      return res.status(404).json({ message: "No jobs found for the user" });
    }
    res.status(200).json({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = jobrouter;
