const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./utils/_db");
const Job = require("./models/jobModel");
const port = process.env.PORT;
app.get("/", async (req, res) => {
  const data = await Job.find();
  res.send(data);
});
app.get("/health", (req, res) => {
  res.json({
    status: "active",
    message: `Server is running in port ${port}`,
    db_status: "Connected to database Succesfully",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
