const express = require("express");
const {
  createUser,
  toggleUser,
  getAllUserBySuperAdmin,
  getAllUserByAdmin
} = require ("../../controllers/user.controller");
const router = express.Router();

router.post("/create", createUser);
router.get("/getAllUserBySuperAdmin", getAllUserBySuperAdmin);
router.get("/getAllUserByAdmin", getAllUserByAdmin);
router.post("/toggleStatusByAdmin", toggleUser);
module.exports = router;



