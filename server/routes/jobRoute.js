const express = require("express");
const authorization = require("../middlewares/authMiddleware");
const Job = require("../models/jobModel");
const { jobValidation } = require("../validations/jobSchema");
const jobrouter = express.Router();
jobrouter.use(express.json());

jobrouter.post("/newjob", authorization, async (req, res) => {
  try {
    const result = await jobValidation.validateAsync(req.body);
    const newjob = new Job({
      ...result,
      refUserId: req.userId,
    });
    await newjob.save();
    return res.status(201).send({ status: "success" });
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json({ error: "Validation failed", details: error.details });
    } else {
      console.log(error);
      return res.status(500).send("Internal server error");
    }
  }
});
//edit an existing job
jobrouter.put("/edit/:jobID", async (req, res) => {
  try {
    const jobID = req.params.jobID;
    const jobToUpdate = await jobValidation.validateAsync(req.body);
    const updatedJob = await Job.findByIdAndUpdate(jobID, jobToUpdate, {
      new: true,
      runValidators: true,
    });
    if (!updatedJob) {
      return res.status(404).json({ status: "not found" });
    }
    return res.status(200).json({ status: "success", data: updatedJob });
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json({ error: "Validation failed", details: error.details });
    } else {
      return res.status(500).send("Internal server error");
    }
  }
});
//get the job with its id
jobrouter.get("/getjob/:jobID", async (req, res) => {
  try {
    const jobID = req.params.jobID;
    const jobToDisplay = await Job.findById(jobID);
    if (!jobToDisplay) {
      return res.status(404).send({ status: "not exist" });
    }
    return res.status(200).send(jobToDisplay);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});
//to get all jobs
jobrouter.get("/alljobs", async (req, res) => {
  try {
    const data = await Job.find();
    if (!data) {
      return res.status(404).json({ message: "No jobs found for the user" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//search by role,companyName,skills
jobrouter.get("/search", async (req, res) => {
  try {
    const role = req.query.role || "";
    const skills = req.query.skills || "";
    const filteredSkills = skills.split(",");
    const SkillFilter = {};
    if (skills.length > 0) {
      SkillFilter.skillsRequired = {
        $in: filteredSkills.map((skill) => new RegExp(skill, "i")),
      };
    }
    const matches = await Job.find({
      role: { $regex: role, $options: "i" },
      ...SkillFilter,
    });
    return res.status(200).json(matches);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

//delete job by id
jobrouter.delete("/delete/:jobID", async (req, res) => {
  try {
    const jobID = req.params.jobID;
    const result = await Job.deleteOne({ _id: jobID });
    if (result.deletedCount === 0) {
      return res.status(404).send("Job not found with that jobID");
    }
    return res.status(200).send({ status: "success" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = jobrouter;
