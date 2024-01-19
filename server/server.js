const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./utils/_db");
const port = process.env.PORT;
const authrouter = require("./routes/authRoute");
const jobrouter = require("./routes/jobRoute");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use("/", jobrouter);
app.use("/", authrouter);
app.get("/health", (req, res) => {
  res.json({
    status: "active",
    message: `Server is running in port ${port}`,
    db_status: "Connected to database Succesfully",
    time: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
