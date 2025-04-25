const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  task: String,
  status: { type: String, enum: ["pending", "complete", "start", "blocker"] },
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);
