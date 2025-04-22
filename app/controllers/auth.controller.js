const { hashPassword, comparePasswords } = require("../config/bcrypt");
const { generateJwt, verifyJwt } = require("../config/jwt");
const sendMail = require("../config/nodemailer");
const User = require("../models/user.model");
const { InternalServerError } = require("../utils/response");

const signUp = async (req, res) => {
  const { firstName, lastName, email, password, profilePic, confirmPassword } =
    req.body;
  try {
    if (
      !firstName ||
      firstName.trim() === "" ||
      !lastName ||
      lastName.trim() === "" ||
      !email ||
      email.trim() === "" ||
      !password ||
      password.trim() === "" ||
      !profilePic ||
      profilePic.trim() === "" ||
      !confirmPassword ||
      confirmPassword.trim() === ""
    ) {
      return res.status(400).json({
        status: false,
        message: "invalid body",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "password does not match ",
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: false,
        message: "email is taken",
      });
    }
    const encryptedPassword = await hashPassword(password);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      profilePic,
      isActive: false,
    });

    const token = generateJwt({ id: newUser?._id });
    const sendMailDto = {
      to: email,
      subject: "Account Activation",
      text: "Click on this link to Activate Account",
      html: `<a>localhost:4000/api/auth/varifyAccount?token=${token}</a>`,
    };
    await sendMail(sendMailDto);

    return res.status(200).json({
      status: true,
      message: "Please check your mail to verify your account.",
      sendMailDto,
    });
  } catch (error) {
    return InternalServerError(res, error);
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || email.trim() === "" || !password || password.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "invalid body",
      });
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({
        status: false,
        message: "invalid credentials",
      });
    }
    if (!userExists.isActive) {
      return res.status(400).json({
        status: false,
        message: "your account is not activated, please activate your account",
      });
    }
   
    const isPasswordMatch = await comparePasswords(
      password,
      userExists.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        status: false,
        message: "invalid credentials",
      });
    }
    const token = generateJwt({ id: userExists._id });
    return res.status(200).json({
      status: true,
      message: "login successfull",
      user: userExists,
      token,
    });
  } catch (error) {
    return InternalServerError(res, error);
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email || email.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "Email is required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    const token = generateJwt({ id: user?._id });
    const sendMailDto = {
      to: email,
      subject: "Account Password Reset",
      text: "Click on this link to reset password",
      html: `<a>localhost:4000/api/auth/resetPassword?token=${token}</a>`,
    };
    await sendMail(sendMailDto);
    return res.status(200).json({
      status: true,
      message: "email has been sent to reset your password",
      sendMailDto,
    });
  } catch (error) {
    return InternalServerError(res, error);
  }
};
const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { token } = req.query;
  try {
    if (
      !password ||
      password.trim() === "" ||
      !confirmPassword ||
      confirmPassword.trim() === ""
    ) {
      return res.status(400).json({
        status: false,
        message: "invalid body",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "password does not match ",
      });
    }
    const verifiedUser = verifyJwt(token);

    const user = await User.findById(verifiedUser?.id);
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    const encryptedPassword = await hashPassword(password);
    const userData = await User.findByIdAndUpdate(
      verifiedUser?.id,
      { password: encryptedPassword },
      { new: true }
    );
    return res.status(200).json({
      status: true,
      message: "User password has been reset",
      user: userData,
    });
  } catch (error) {
    return InternalServerError(res, error);
  }
};

const varifyAccount = async (req, res) => {
  const { token } = req.query;
  try {
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Token is needed",
      });
    }

    const verifiedUser = verifyJwt(token);

    const user = await User.findById(verifiedUser?.id);
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }
    const userData = await User.findByIdAndUpdate(
      verifiedUser?.id,
      { isActive: true },
      { new: true }
    );

    return res.status(200).json({
      status: true,
      message: "Account has been activated",
      user: userData,
    });
  } catch (error) {
    return InternalServerError(res, error);
  }
};

module.exports = {
  signIn,
  signUp,
  forgotPassword,
  resetPassword,
  varifyAccount,
};
