const express = require("express");
const User = require("../models/userModel");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authorization = require("../middlewares/authMiddleware");
authRouter.use(express.json());
// authRouter.get("/getID", authorization, (req, res) => {
//   const id = req.userId;
//   console.log(id);
//   res.json({ id: id });
// });
authRouter.get("/userdata", authorization, async (req, res) => {
  const userID = req.userId;
  const data = await User.findOne({ _id: userID });
  return res.status(202).json({ id: data._id, username: data.name });
});
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res.status(200).send({ status: "not found" });
    }
    const passwordMatch = await bcrypt.compare(password, userExists.password);
    if (!passwordMatch) {
      return res.status(200).send({ status: "invalid" });
    }
    const token = jwt.sign({ userId: userExists._id }, process.env.JWT_SECRET);
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: false,
    //   sameSite: "none",
    // });
    res
      .status(202)
      .json({ status: "success", token: token, username: userExists.name });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});
authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, mobileNumber } = req.body;
    if (!name || !email || !password || !mobileNumber) {
      return res.status(400).send("bad request");
    }
    const userExists = await User.findOne({
      $or: [{ email: email }, { mobileNumber: mobileNumber }],
    });

    if (userExists) {
      return res.status(409).json({
        status: "exists",
        message: "Acccount already exists,Please try different credentials",
      });
    }
    const hashed = await bcrypt.hashSync(password, 10);
    const newuser = new User({
      name,
      email,
      mobileNumber,
      password: hashed,
    });
    const savedUser = await newuser.save();
    const token = await jwt.sign(
      { userId: savedUser._id },
      process.env.JWT_SECRET
    );
    // res.cookie("token", token, {
    //   httpOnly: true,
    // });

    res
      .status(201)
      .json({ status: "success", token: token, username: newuser.name });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = authRouter;
