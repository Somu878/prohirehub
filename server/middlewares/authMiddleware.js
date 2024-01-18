const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
module.exports = async (req, res, next) => {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res.status(400).send("Token not found");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.userId) {
      return res.status(401).send("Invalid token");
    }
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};
