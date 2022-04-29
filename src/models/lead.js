const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    saleId: {
      type: String,
      required: true,
      trim: true,
    },
    business_name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    industry: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    contact_person: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    contact_email: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    contact_number: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    service_type: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    service_subtype: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    region: {
      type: String,
      required: true,
      uppercase: true,
    },
    status: {
      type: String,
      required: true,
      uppercase: true,
      default: "open",
    },
    notes: {
      type: String,
      required: true,
      default: null,
    },
    created_by: {
      type: String,
      required: true,
      uppercase: true,
    },
    creator_email: {
      type: String,
      required: true,
      lowercase: true,
    },
    creator_ekno: {
      type: String,
      required: true,
      uppercase: true,
    },
    creator_department: {
      type: String,
      required: true,
      uppercase: true,
    },
    creator_position: {
      type: String,
      required: true,
      uppercase: true,
    },
    assigned_by: {
      type: String,
      uppercase: true,
    },
    assignor_email: {
      type: String,
      lowercase: true,
    },
    assignor_ekno: {
      type: String,
      uppercase: true,
    },
    assignor_department: {
      type: String,
      uppercase: true,
    },
    assignor_position: {
      type: String,
      uppercase: true,
    },
    sales_person: {
      type: String,
      uppercase: true,
    },
    sales_person_email: {
      type: String,
      lowercase: true,
    },
    sales_person_ekno: {
      type: String,
      uppercase: true,
    },
    sales_person_department: {
      type: String,
      uppercase: true,
    },
    sales_person_position: {
      type: String,
      uppercase: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);
