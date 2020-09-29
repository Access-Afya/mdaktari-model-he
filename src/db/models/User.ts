"use strict";
// import mongoose = require("mongoose");
import validator = require("validator");
import timestampPlugin = require("../plugins/timestamp");

const mongoose = module.parent.exports.mongoose;

const userSchema = new mongoose.Schema({
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
  patientProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PatientProfile",
  },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" }, // TODO: Add this --> , required: true
  membershipExpiry: { type: Date },
  quota: { type: Number, min: 0, default: 0 },
  consultsLimit: { type: Number, min: 0, default: 0 },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

userSchema.plugin(timestampPlugin);
const User = mongoose.model("User", userSchema);
export = User;
