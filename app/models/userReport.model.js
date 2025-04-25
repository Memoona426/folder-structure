const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  date: { type: Date, required: true },
  task: { type: String, required: true },
  status: { type: String, enum: ["pending", "complete", "start", "blocker"], required: true },
  description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);
