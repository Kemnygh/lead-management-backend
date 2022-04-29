const express = require("express");
const router = express.Router();
const {
  login,
  register,
  updateAdminToUser,
  updateUserToAdmin,
} = require("../../controller/admin/admin_authenticate");

router.post("/login", login);

router.post("/register", register);

router.post("/updater-user", updateUserToAdmin);

router.post("/updater-admin", updateAdminToUser);

module.exports = router;
