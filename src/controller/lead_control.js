const Lead = require("../models/lead");

exports.lead = (req, res) => {
  // user.findOne({ email: req.body.email }).exec((err, user) => {
  //   if (user) {

  const {
    saleId,
    business_name,
    industry,
    contact_person,
    contact_email,
    contact_number,
    service_type,
    service_subtype,
    region,
    status,
  } = req.body;

  const newLead = new Lead({
    saleId,
    business_name,
    industry,
    contact_person,
    contact_email,
    contact_number,
    service_type,
    service_subtype,
    region,
    status,
  });

  newLead.save((err, data) => {
    console.log(res.body);
    if (err) {
      return res.status(400).json({
        message: err,
      });
    } else {
      return res.status(201).json({
        message: "lead created Successfully",
      });
    }
  });
  //   }

  // });
};
