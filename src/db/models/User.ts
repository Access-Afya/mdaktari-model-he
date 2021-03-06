import mongoose from "mongoose";
import validator from "validator";
import mongoose_fuzzy_searching from "mongoose-fuzzy-searching";

import timestampPlugin from "../plugins/timestamp";

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
  chvCode: { type: String },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 13,
    maxlength: 13,
    trim: true,
  },
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
  organization: [{ type: mongoose.Schema.Types.ObjectId, ref: "Organization" }],
  membershipExpiry: { type: Date },
  quota: { type: Number, min: 0, default: 0 },
  consultsLimit: { type: Number, min: 0, default: 0 },
  utilization: { type: Number, min: 0, default: 0 },
  // csv start
  fullname: { type: String },
  chartId: { type: String },
  firstAppointmentDate: { type: Date },
  lastAppointmentDate: { type: Date },
  firstRegistrationDate: { type: Date },
  lastMembershipRenewal: { type: Date },
  renewalStatus: { type: String },
  validity: { type: String },
  monthsInUse: { type: String },
  customerType: { type: String },
  residenceRegion: { type: String },
  occupation: { type: String },
  howDidYouHearAboutUs: { type: String },
  // csv end
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

userSchema.plugin(timestampPlugin);

userSchema.plugin(mongoose_fuzzy_searching, {
  fields: ["firstName", "lastName", "email", "phoneNumber"],
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
