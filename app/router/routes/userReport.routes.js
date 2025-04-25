const express = require("express");
const { checkUserActivitiesByAdmin, createReport } = require("../../controllers/userReport.controller");
const { authGuard } = require("../../middleware/authGaurd");
const router = express.Router();

router.post("/", authGuard, createReport);
router.get("/checkUserActivitiesByAdmin", authGuard, checkUserActivitiesByAdmin);

module.exports = router;