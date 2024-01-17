const express = require("express");
const User = require("../models/userModel");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
authRouter.use(express.json());
authRouter.get("/userdata", async (req, res) => {
  const data = await User.find();
  res.send(data);
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
      return res
        .status(409)
        .send("Acccount already exists,Please try different credentials");
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
    res.status(200).json({ message: "Registration successful!", token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = authRouter;
