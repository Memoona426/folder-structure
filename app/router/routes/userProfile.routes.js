const express = require("express");
const {
    createProfile,
    getProfile,
    updateProfile,
    deleteProfile,
} = require("../../controllers/userProfile.controller");
const { authGuard } = require("../../middleware/authGaurd");

const router = express.Router();

router.post("/", authGuard, createProfile);
router.get("/", authGuard, getProfile);
router.patch("/", authGuard, updateProfile);
router.delete("/", authGuard, deleteProfile);

module.exports = router;