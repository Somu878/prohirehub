import React, { useEffect, useState } from "react";
import styles from "./jobform.module.css";
import { getJobDataID, addJob, EditJob } from "../../apis/job";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function JobForm({ method, handleSubmit }) {
  const { id } = useParams();
  const navigate = useNavigate();
  async function getJobData() {
    if (method === "Edit") {
      try {
        const response = await getJobDataID(id);
        if (response) {
          setJobData({
            role: response.role || "",
            salary: response.salary || "",
            company: response.company || "",
            companyLogoUrl: response.companyLogoUrl || "",
            companySize: response.companySize || "",
            jobType: response.jobType || "",
            jobLocation: response.jobLocation || "",
            location: response.location || "",
            skillsRequired: response.skillsRequired || "",
            jobDescription: response.jobDescription || "",
            aboutCompany: response.aboutCompany || "",
            otherinfo: response.otherinfo || "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    getJobData();
  }, []);
  async function handleAdd() {
    try {
      const response = await addJob(jobData);
      toast.success("New Job added");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  async function handleEdit() {
    try {
      const response = await EditJob(id, jobData);
      if (response.status === "success") {
        toast.success("Successfully Edited!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(",").map((skill) => skill.trim());
    setJobData((prevData) => ({ ...prevData, skillsRequired: skillsArray }));
  };
  const [jobData, setJobData] = useState({
    company: "",
    companyLogoUrl: "",
    companySize: "",
    role: "",
    salary: "",
    jobType: "",
    jobLocation: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skillsRequired: "",
    otherinfo: "",
  });
  return (
    <div className={styles.container}>
      <h1>{method} job description</h1>
      <div
        className={styles.form}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className={styles.formgroup}>
          {" "}
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            name="company"
            spellCheck="false"
            value={jobData.company}
            required
            placeholder="Enter company name here"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formgroup}>
          {" "}
          <label htmlFor="companyLogoUrl">Add logo URL</label>
          <input
            type="text"
            name="companyLogoUrl"
            spellCheck="false"
            value={jobData.companyLogoUrl}
            required
            placeholder="Enter logo URl here"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formgroup}>
          {" "}
          <label htmlFor="companySize">Company Size</label>
          <input
            type="text"
            name="companySize"
            spellCheck="false"
            value={jobData.companySize}
            required
            placeholder="Enter company size"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formgroup}>
          {" "}
          <label htmlFor="role">Job Role</label>
          <input
            type="text"
            name="role"
            spellCheck="false"
            required
            value={jobData.role}
            placeholder="Enter Job role"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="salary">Monthly salary</label>
          <input
            type="text"
            name="salary"
            spellCheck="false"
            value={jobData.salary}
            required
            placeholder="Enter salary in rupees"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formgroupselect}>
          <label htmlFor="jobType">Job Type</label>
          <select
            name="jobType"
            defaultValue={"default"}
            value={jobData.jobType}
            onChange={handleInputChange}
          >
            <option value="default" disabled>
              Select
            </option>
            <option value="internship">internship</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
          </select>
        </div>
        <div className={styles.formgroupselect}>
          <label htmlFor="jobLocation">Remote/Office</label>
          <select
            name="jobLocation"
            value={jobData.jobLocation}
            onChange={handleInputChange}
          >
            <option value="default" disabled>
              Select
            </option>
            <option value="remote">Remote</option>
            <option value="in-office">In-office</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            spellCheck="false"
            required
            value={jobData.location}
            placeholder="Enter location here"
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className={styles.formgroup}>
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            style={{ height: "100px" }}
            type="text"
            name="jobDescription"
            spellCheck="false"
            value={jobData.jobDescription}
            required
            placeholder="Type the job description"
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className={styles.formgroup}>
          <label htmlFor="aboutCompany">About Company</label>
          <textarea
            style={{ height: "100px" }}
            type="text"
            name="aboutCompany"
            spellCheck="false"
            required
            value={jobData.aboutCompany}
            placeholder="Type about company here"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="skillsRequired">Skills Required</label>
          <input
            type="text"
            name="skillsRequired"
            spellCheck="false"
            required
            value={jobData.skillsRequired}
            placeholder="Enter the must have skills"
            onChange={handleSkillsChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="otherinfo">Information</label>
          <input
            type="text"
            name="otherinfo"
            spellCheck="false"
            required
            value={jobData.otherinfo}
            placeholder="Enter additional information"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formbtn}>
          {" "}
          <button
            style={{
              background: "transparent",
              color: "#ed5353",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          {method === "Add" ? (
            <button onClick={handleAdd}>+Add job</button>
          ) : (
            <button onClick={handleEdit}>Edit Job</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobForm;
