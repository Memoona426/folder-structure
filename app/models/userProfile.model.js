const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    fullName: { type: String, required: false, default: "", },
    profilePic: { type: String, required: false, default: "", },
    age: { type: Number, required: false, default: 0 },
    gender: { type: String, enum: ["male", "female", "other"], required: false, default: "other" },
    phone: { type: String, required: false, default: "" },
    address: { type: String, required: false, default: "" },
    bio: { type: String, required: false, default: "" }
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);
