const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  token: { type: String, required: false, default: "", },
  role: { type: String, enum: ["superAdmin", "admin", "user"], default: "user" },
  permissions: { type: String, enum: ["profile", "none"], default: "none", required: false },
  isActive: { type: Boolean, required: true },
},
  { timestamps: true });

module.exports = mongoose.model("User", userSchema);