"use strict";
import mongoose = require("mongoose");
import validator = require("validator");
import timestampPlugin = require("../../plugins/timestamp");

const organizationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  phone: { type: String, required: true },
  name: { type: String },
  logoUrl: { type: String },
  quota: { type: Number },
  accountStatus: {
    type: String,
    enum: ["Active", "Disabled"],
    default: "Active",
  },
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrganizationAdmin",
      // index: { unique: true, dropDups: true }, // WARNING: 'dropDups' - but be careful, as this will automatically delete data
    },
  ],
  aaAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

organizationSchema.plugin(timestampPlugin);
const Organization = mongoose.model("Organization", organizationSchema);
export = Organization;
