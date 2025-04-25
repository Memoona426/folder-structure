const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { loggerResponse } = require("../utils/loggerResponse");

const createUser = async (req, res) => {
  const { name, email, password, role, isActive } = req.body;

  try {
    const userExist = await User.findOne({ email });
        if (userExist) {
          loggerResponse({
            type: "error",
            message: `user already exist with this email ${email}`,
            res: ""
          })
          return res
            .status(400)
            .json({ status: false, message: "user already exists" });
        }
    
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      isActive,
    });
    loggerResponse({
      type: "info",
      message: `user has been created with role ${role} and with name ${name}`,
    });
    return res.status(201).json({
      status: true,
      message: "User profile created successfully",
      profile: newUser,
    });
  } catch (err) {
    loggerResponse({
      type: "error",
      message: `internal server error in createUser Api`,
      res: err
    });

    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};



const toggleUser = async (req, res) => {
  const { role ,userId } = req.query;

  try {
    if (role !== "admin") {
      loggerResponse({
        type: "error",
        message: `only admin can toggle status of user`,
        res: ""
      })
      return res
        .status(400)
        .json({ status: false, message: "only admin can toggle status of user" });
    }
    const userExist = await User.findById(userId);
        if (!userExist) {
          loggerResponse({
            type: "error",
            message: `user does not exist`,
            res: ""
          })
          return res
            .status(400)
            .json({ status: false, message: "user does not exists" });
        }
    const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          {isActive : !userExist.isActive},
          { new: true }
        );
        loggerResponse({
          type: "info",
          message: `user status has been toggle`,
        });
        return res.status(200).json({
          status: true,
          message: "user status has been toggle",
          user: updatedUser,
        });
  } catch (err) {
    loggerResponse({
      type: "error",
      message: `internal server error in createUser Api`,
      res: err
    });

    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};



const getAllUserBySuperAdmin =async (req,res) =>{
  try{
    const admin = await User.find({role:"admin"})
    const user = await User.find({role:"user"})
    loggerResponse({
      type: "info",
      message: `fetch all admin and users`
    });
    return res.status(200).json({
      status: true,
      message: "fetch all admin and users",
      admin,
      user
    });
  }catch(err){
    loggerResponse({
      type: "error",
      message: `internal server error in createUser Api`,
      res: err
    });

    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
}


const getAllUserByAdmin =async (req,res) =>{
  try{
    const user = await User.find({role:"user"})
    loggerResponse({
      type: "info",
      message: `fetch all users`
    });
    return res.status(200).json({
      status: true,
      message: "fetch all users",
      user
    });
  }catch(err){
    loggerResponse({
      type: "error",
      message: `internal server error in createUser Api`,
      res: err
    });

    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
}

module.exports = { createUser,toggleUser,getAllUserBySuperAdmin,getAllUserByAdmin };