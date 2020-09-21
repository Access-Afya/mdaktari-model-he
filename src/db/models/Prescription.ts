"use strict";
import mongoose = require("mongoose");
import timestampPlugin = require("../plugins/timestamp");

const prescriptionSchema = new mongoose.Schema({
  consultId: { type: mongoose.Schema.Types.ObjectId, ref: "Consult" },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  name: { type: String },
  form: { type: String },
  dosage: { type: String },
  additionalInstructions: { type: String },
  administrationDuration: { type: String },
  administrationFrequency: { type: String },
  administrationRoute: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

prescriptionSchema.plugin(timestampPlugin);
const Prescription = mongoose.model("Prescription", prescriptionSchema);
export = Prescription;
