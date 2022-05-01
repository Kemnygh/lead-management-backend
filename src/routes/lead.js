const express = require("express");
const router = express.Router();
const { lead, updateLead, closeLead } = require("../controller/lead_control");
const { requireLogin } = require("../controller/authenticate");

router.post("/profile/create-lead", requireLogin, lead);

router.post("/profile/update-lead/assign", requireLogin, updateLead);

router.post("/profile/update-lead/close", requireLogin, closeLead);

module.exports = router;
