const express = require("express");

const {
  signIn,
  signUp,
  resetPassword,
  forgotPassword,
  varifyAccount,
  logOutUser,
} = require("../../controllers/auth.controller");
const { authGuard } = require("../../middleware/authGaurd");

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post('/varifyAccount', varifyAccount);
router.post('/logout', authGuard, logOutUser);


module.exports = router;