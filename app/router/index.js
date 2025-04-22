const express = require("express");
const router = express.Router();

const userRoutes = require("./routes/user.routes");
router.use("/user", userRoutes);

const authRoutes = require("./routes/auth.routes");
router.use("/auth", authRoutes);

const userProfileRoutes = require("./routes/userProfile.routes");
router.use("/userProfile", userProfileRoutes);

module.exports = router;

