import mongoose from "mongoose";
import validator from "validator";

import timestampPlugin from "../../plugins/timestamp";

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

const OrganizationAdminModel = mongoose.model(
  "OrganizationAdmin",
  organizationAdminSchema
);

export default OrganizationAdminModel;
