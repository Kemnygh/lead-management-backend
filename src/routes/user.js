const express = require("express");
const router = express.Router();
const { login, register, requireLogin } = require("../controller/authenticate");

router.post("/login", login);

router.post("/register", register);

// router.post("/profile", requireLogin, (req, res) => {
//   res.status(200).json({
//     user: "profile",
//   });
// });

module.exports = router;
