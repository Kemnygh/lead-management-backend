const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    ekno: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    division: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    access: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    contact_number: String,
    profile_picture: String,
    lastLogin: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

userSchema.virtual("fullname").get(function () {
  return `${this.firstname} ${this.lastname}`;
});

userSchema.virtual("currentLogin").get(function () {
  const today = Date.now();
  const dateTime = new Date(today);
  return dateTime.toLocaleString("en-US", { timeZone: "Africa/Nairobi" });
});

module.exports = mongoose.model("User", userSchema);
