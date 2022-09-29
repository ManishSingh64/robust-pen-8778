const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("../Models/user.schema");
dotenv.config();

const userController = express.Router();

userController.post("/signup", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      res.status(400).send("Try again");
    }
    const user = await User.create({ email, password: hash });
    res.status(201).send(user);
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user)
  if (!user) {
    return res.send("Invalid Username");
  }
  const hashed_password = user.password;
  bcrypt.compare(password, hashed_password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email, userId: user._id }, process.env.TOKEN_KEY);
      return res
        .status(201)
        .send({ message: "Login successfull", token: token, email: email });
    } else {
      return res.status(401).send("Invalid credentials");
    }
  });
});

module.exports = userController
