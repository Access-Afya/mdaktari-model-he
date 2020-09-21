"use strict";
// import mongoose = require("mongoose");
import validator = require("validator");
import timestampPlugin = require("../../plugins/timestamp");

const mongoose = module.parent.exports.mongoose;

const organizationAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  phoneNumber: { type: String, required: true, unique: true },
  otpCode: { type: String },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  accountStatus: {
    type: String,
    enum: ["Active", "Disabled"],
    default: "Active",
  },
  adminAccountType: {
    type: String,
    enum: ["Primary", "Secondary"],
    default: "Primary",
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

organizationAdminSchema.plugin(timestampPlugin);
const OrganizationAdmin = mongoose.model(
  "OrganizationAdmin",
  organizationAdminSchema
);
export = OrganizationAdmin;
