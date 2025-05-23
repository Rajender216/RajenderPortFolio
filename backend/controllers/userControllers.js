import e from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { transporter } from "../config/nodemailer.js";

const otpStore = {};

//OTP generation
const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
};

function storeOtpTemporarily(key, otp) {
  otpStore[key] = otp;

  // Auto-delete OTP after 5 minutes (300000 ms)
  setTimeout(() => {
    delete otpStore[key];
  }, 300000); // 5 minutes
}

const sendOtp = async ({ email, otp }) => {
  await transporter.sendMail({
    from: `"Raabadi and Code Support" <${process.env.EMAIL_USER}>`, // Custom display name
    to: email,
    subject: "Verify Your Email - OTP Inside",
    text: `Hello,

Thank you for signing up with Raabadi and Code.

Your One-Time Password (OTP) for verification is: ${otp}

This OTP is valid for the next 10 minutes. Please do not share it with anyone.

If you did not request this, you can safely ignore this email.

Regards,  
Raabadi and Code Team`,
  });
};

const sendEmail = async (name, email, message) => {
  console.log(email);
  await transporter.sendMail({
    from: `"${name}" <${email}>`, // Custom display name
    to: process.env.EMAIL_USER,
    subject: `New message from ${name} to connect`,
    text: message,
  });
};

const sentMessageOfUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(200)
        .send({ success: false, message: "Please fill all fields" });
    }
    await sendEmail(name, email, message);
    res.status(200).send({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(200)
        .send({ success: false, message: "Please fill all fields" });
    }
    const isExist = await User.findOne({ email });

    if (isExist) {
      return res
        .status(208)
        .send({ success: false, message: "User already exists" });
    }
    const otp = generateOTP();
    storeOtpTemporarily(email, otp);
    await sendOtp({ email, otp });

    res.status(200).send({
      success: true,
      message: "OTP sent to your email",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ sucess: false, message: error.message });
  }
};

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
    console.log("token");
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

const verifyOtp = async (req, res) => {
  const { otp, email, password, username } = req.body;
  const storedOtp = otpStore[email];
  if (!storedOtp) {
    return res.status(400).send({ success: false, message: "OTP expired" });
  }
  if (storedOtp !== otp) {
    return res.status(400).send({ success: false, message: "Invalid OTP" });
  }
  delete otpStore[email]; // Remove OTP after verification

  //save user to db
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  res
    .status(201)
    .send({ success: true, message: "User registered successfully" });
};

const logoutController = async (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .send({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

export {
  loginController,
  registerController,
  verifyOtp,
  logoutController,
  sentMessageOfUser,
};
