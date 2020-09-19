"use strict";
const mongoose = require("mongoose");
const validator = require("validator");
const timestampPlugin = require("../../plugins/timestamp");

const adminSchema = new mongoose.Schema({
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
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

adminSchema.plugin(timestampPlugin);
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
