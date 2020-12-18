import mongoose from "mongoose";
import validator from "validator";

import timestampPlugin from "../plugins/timestamp";

const doctorSchema = new mongoose.Schema({
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
  // TODO: move this stuff to DoctorProfile
  workingStatus: {
    type: String,
    enum: ["Offline", "Online"],
    default: "Offline",
  },
  doctorProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DoctorProfile",
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

doctorSchema.plugin(timestampPlugin);

const DoctorModel = mongoose.model("Doctor", doctorSchema);

export default DoctorModel;
