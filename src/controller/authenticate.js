const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user)
      return res.status(400).json({
        message: "User already exists",
      });

    const {
      firstname,
      lastname,
      email,
      password,
      ekno,
      division,
      department,
      role,
    } = req.body;

    const _user = new User({
      firstname,
      lastname,
      email,
      password,
      ekno,
      division,
      department,
      role,
    });

    _user.save((err, data) => {
      if (err) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      } else {
        return res.status(201).json({
          user: "User created Successfully",
        });
      }
    });
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET, {
          expiresIn: "1h",
        });
        const {
          _id,
          firstname,
          lastname,
          email,
          fullname,
          role,
          lastLogin,
          currentLogin,
        } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstname,
            lastname,
            email,
            fullname,
            role,
            lastLogin,
            currentLogin,
          },
        });
        User.updateOne(
          { email: req.body.email },
          { $set: { lastLogin: currentLogin } },
          (err, res) => {
            if (err) throw err;
            console.log("1 document updated");
          }
        );
      } else {
        return res.status(400).json({
          message: "Invalid user or password",
        });
      }
    } else {
      res.status(200).json({
        message: "Something went wrong",
      });
    }
  });
};

exports.requireLogin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token);
  const user = jwt.verify(token, process.env.JWTSECRET);
  req.user = user;
  next();
};
