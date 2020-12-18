import mongoose from "mongoose";

import timestampPlugin from "../plugins/timestamp";

const patientProfileSchema = new mongoose.Schema({
  allergies: { type: String },
  drugAllergies: { type: String },
  foodAllergies: { type: String },
  others: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  familyHistory: [
    {
      name: { type: String },
    },
  ],
  socialHistory: [
    {
      name: { type: String },
    },
  ],
  medicalHistory: [
    {
      name: { type: String },
    },
  ],
  medicalConditions: [
    {
      name: { type: String },
    },
  ],
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

patientProfileSchema.plugin(timestampPlugin);

const PatientProfileModel = mongoose.model(
  "PatientProfile",
  patientProfileSchema
);

export default PatientProfileModel;
