const express = require("express");
const router = express.Router();
const { login, register, signout } = require("../controller/authenticate");
const { requireLogin } = require("../middleware");
const {
  loginValidator,
  isRequestValidated,
  registerValidator,
} = require("../validators/userValidator");

router.post("/login", loginValidator, isRequestValidated, login);

router.post("/register", registerValidator, isRequestValidated, register);

router.post("/logout", signout);

// router.post("/profile", requireLogin, (req, res) => {
//   res.status(200).json({
//     user: "profile",
//   });
// });

module.exports = router;
