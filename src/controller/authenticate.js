const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  // console.log(req.body);
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
      region,
      access,
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
      region,
      access,
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
  // console.log(res.body);
  User.findOne({ email: req.body.email, status: "active" }).exec(
    (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          message: "User not found",
        });
      }
      if (user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET, {
            expiresIn: "30m",
          });
          const {
            _id,
            firstname,
            lastname,
            email,
            fullname,
            ekno,
            department,
            role,
            region,
            access,
            lastLogin,
            currentLogin,
          } = user;
          res.cookie("token", token, { expiresIn: "30m" });
          res.status(200).json({
            token,
            user: {
              _id,
              firstname,
              lastname,
              email,
              fullname,
              ekno,
              department,
              role,
              region,
              access,
              lastLogin,
              currentLogin,
            },
          });
          User.updateOne(
            { email: req.body.email },
            { $set: { lastLogin: currentLogin } },
            (err, res) => {
              if (err) throw err;
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
    }
  );
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout Successfully",
  });
};

// TODO:
// add a method to delet users **soft delete**
