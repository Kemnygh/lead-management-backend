const express = require("express");
const router = express.Router();
const {
  lead,
  updateLead,
  closeLead,
  getLeads,
  leadStatus,
} = require("../controller/lead_control");
const { requireLogin, leadMiddleware } = require("../middleware");

router.post("/profile/create-lead", requireLogin, lead);

router.post("/profile/update-lead/assign", requireLogin, updateLead);

router.post("/profile/update-lead/close", requireLogin, closeLead);

router.get("/profile/leads", getLeads);

module.exports = router;
