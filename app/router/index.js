const express = require("express");
const router = express.Router();

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const userProfileRoutes = require("./routes/userProfile.routes");
const userReportsRoutes = require("./routes/userReport.routes");

router.use("/user", userRoutes);
router.use("/user/profile", userProfileRoutes);
router.use("/auth", authRoutes);
router.use("/user/reports", userReportsRoutes);

module.exports = router;

