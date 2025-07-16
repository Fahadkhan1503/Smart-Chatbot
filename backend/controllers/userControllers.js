import sendMail from "../middlewares/sendMail.js";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { email } = req.body || {};
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
      });
    }
    const otp = Math.floor(Math.random() * 1000000);
    const verifyToken = jwt.sign({ user, otp }, process.env.Activation_sec, {
      expiresIn: "5m",
    });
    await sendMail(email, "OTP for Chatbot Verification", otp);
    res.json({
      message: "OTP send to your mail!!",
      verifyToken,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { otp, verifyToken } = req.body || {};
    const verify = jwt.verify(verifyToken, process.env.Activation_sec);
    if (!verify) {
      return res.status(400).json({
        message: "OTP expired!!",
        verifyToken,
      });
    }
    if (verify.otp !== otp) {
      return res.status(400).json({
        message: "OTP is not correct!!",
      });
    }
    const token = jwt.sign({ _id: verify.user._id }, process.env.jwt_sec, {
      expiresIn: "5d",
    });
    res.json({
      message: "Logged in Successfully!!",
      user: verify.user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
