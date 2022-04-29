const express = require("express");
const router = express.Router();
const { lead } = require("../controller/lead_control");

router.post("/lead", lead);

// router.post("/register", register);

module.exports = router;
