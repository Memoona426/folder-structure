const express = require("express");
const {
    createReport,
} = require ("../../controllers/user.controller");
const router = express.Router();

router.post("/create", createReport); 

module.exports = router;