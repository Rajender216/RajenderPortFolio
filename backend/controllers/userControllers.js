import e from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid Crendentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(401)
        .send({ success: false, message: "Invalid Password" });
    }

    //token generation and save
    console.log("token")
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 3600000,
      })
      .status(200)
      .send({ success: true, message: "logged in successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: true, message: error.message });
  }
};
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({ message: "Please fill all fields" });
    }
    const isExist = User.findOne({ email });
    if (!isExist) {
      return res.status(400).send({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ sucess: false, message: error.message });
  }
};

const getUserProfile = async (req, res) => {};
const updateUserProfile = async (req, res) => {};
const getUsers = async (req, res) => {};
const getUserById = async (req, res) => {};
const deleteUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const getUserByEmail = async (req, res) => {};
const getUserByusername = async (req, res) => {};

export {
  loginController,
  registerController,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
  getUserByEmail,
  getUserByusername,
};
