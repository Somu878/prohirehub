const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./utils/_db");
const port = process.env.PORT;
const authrouter = require("./routes/authRoute");
const jobrouter = require("./routes/jobRoute");
const cookieParser = require("cookie-parser");
var cors = require("cors");
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});
const corsConfig = {
  origin: ["*"],
  credentials: true,
};
app.use(cors(corsConfig));
app.use("/job", jobrouter);
app.use("/user", authrouter);

app.get("/health", (req, res) => {
  res.json({
    status: "active",
    message: `Server is running in port ${port}`,
    time: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
