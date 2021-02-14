import mongoose from "mongoose";
import validator from "validator";

import timestampPlugin from "../plugins/timestamp";

const chvSchema = new mongoose.Schema({
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

  chvProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chvProfile",
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

chvSchema.plugin(timestampPlugin);

const ChvModel = mongoose.model("Chv", chvSchema);

export default ChvModel;
