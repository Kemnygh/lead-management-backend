const Lead = require("../models/lead");
const User = require("../models/user");
const crypto = require("crypto");

exports.lead = (req, res) => {
  console.log(req.user);
  User.findOne({ _id: req.user._id }).exec((err, user) => {
    if (user) {
      const {
        business_name,
        industry,
        contact_person,
        contact_email,
        contact_number,
        service_type,
        service_subtype,
        region,
        status,
        notes,
      } = req.body;

      const newLead = new Lead({
        leadId: "SLD-" + crypto.randomBytes(4).toString("hex"),
        business_name,
        industry,
        contact_person,
        contact_email,
        contact_number,
        service_type,
        service_subtype,
        region,
        status,
        notes,
        created_by: `${user.firstname} ${user.lastname}`,
        creator_email: user.email,
        creator_ekno: user.ekno,
        creator_department: user.department,
        creator_position: user.role,
      });

      newLead.save((err, data) => {
        if (err) {
          return res.status(400).json({
            message: err,
          });
        } else {
          return res.status(201).json({
            message: "lead created Successfully lead ID is:",
          });
        }
      });
    }
  });
};
