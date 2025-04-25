const express = require("express");
const { authGuard } = require("../../middleware/authGaurd");

const {
  createUserBySuperAdmin,
  toggleUserByAdmin,
  getAllUserBySuperAdmin,
  getAllUserByAdmin,
  createUserByAdmin,
  assignProfileBySuperAdmin
} = require("../../controllers/user.controller");

const router = express.Router();

router.post("/createUserBySuperAdmin", authGuard, createUserBySuperAdmin);
router.post("/createUserByAdmin", authGuard, createUserByAdmin);

router.get("/getAllUserBySuperAdmin", authGuard, getAllUserBySuperAdmin);
router.get("/getAllUserByAdmin", authGuard, getAllUserByAdmin);
router.patch("/toggleUserByAdmin", authGuard, toggleUserByAdmin);
router.patch("/assignProfileBySuperAdmin", authGuard, assignProfileBySuperAdmin);
module.exports = router;



