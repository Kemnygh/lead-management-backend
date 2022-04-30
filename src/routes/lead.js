const express = require("express");
const router = express.Router();
const { lead } = require("../controller/lead_control");
const { requireLogin } = require("../controller/authenticate");

router.post("/lead", requireLogin, lead);

// router.post("/register", register);

module.exports = router;
