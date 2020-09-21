"use strict";
import mongoose = require("mongoose");
import validator = require("validator");
import timestampPlugin = require("../../plugins/timestamp");

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
export = Admin;
