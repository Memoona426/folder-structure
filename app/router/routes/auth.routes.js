const express = require("express");

const {
  signIn,
  signUp,
  resetPassword,
  forgotPassword,
  varifyAccount,
} = require("../../controllers/auth.controller");

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post('/varifyAccount', varifyAccount);


module.exports = router;