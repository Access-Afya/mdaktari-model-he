"use strict";
// import mongoose = require("mongoose");
import timestampPlugin = require("../plugins/timestamp");

const mongoose = module.parent.exports.mongoose;

const consultSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  prescriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prescription",
      // index: { unique: true, dropDups: true }, // WARNING: 'dropDups' - but be careful, as this will automatically delete data
    },
  ],
  testOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestOrder",
      // index: { unique: true, dropDups: true }, // WARNING: 'dropDups' - but be careful, as this will automatically delete data
    },
  ],
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  openTokSessionId: { type: String },
  openTokDoctorToken: { type: String },
  openTokPatientToken: { type: String },
  purposeDescription: { type: String },
  testOrderReason: { type: String },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Processing", "Success", "Failed"],
    default: "Pending",
  },
  consultStatus: {
    type: String,
    enum: [
      "Pending",
      "WaitingDoctor",
      "Ongoing",
      "Rescheduled",
      "Complete",
      "Cancelled",
    ],
    default: "Pending",
  },
  medications: { type: String },
  duration: { type: String },
  allergies: { type: String },
  symptoms: { type: String },
  treatmentResult: { type: String },
  treatmentDescription: { type: String },
  consultStartedAt: { type: Date },
  patientRemarks: { type: String },
  patientNpsScore: { type: String },
  classification: { type: String },
  doctorNotes: { type: String },
  patientNotes: { type: String },
  consultNotes: { type: String },
  systemicReview: {
    digestiveSystem: {
      stomachPain: { type: Boolean, default: false },
      constipation: { type: Boolean, default: false },
      diarrhea: { type: Boolean, default: false },
      bloatedStomach: { type: Boolean, default: false },
      rumblingNoises: { type: Boolean, default: false },
      heartburn: { type: Boolean, default: false },
      nauseaAndVomiting: { type: Boolean, default: false },
    },
    respiratorySystem: {
      chestPain: { type: Boolean, default: false },
      shortnessOfBreath: { type: Boolean, default: false },
      coughing: { type: Boolean, default: false },
      bloodInSputum: { type: Boolean, default: false },
      whizzingSoundWhenBreathing: { type: Boolean, default: false },
    },
    immuneSystem: {
      autoimmuneDisorders: { type: Boolean, default: false },
      organInflammation: { type: Boolean, default: false },
    },
  },
  recap: { type: String },
  diagnosis: { type: String },
  managementPlan: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

consultSchema.plugin(timestampPlugin);
const Consult = mongoose.model("Consult", consultSchema);
export = Consult;
