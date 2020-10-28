"use strict";
// import mongoose = require("mongoose");
import timestampPlugin = require("../../plugins/timestamp");

const mongoose = module.parent.exports.mongoose;

const utilizationSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
    enum: ["Cash", "M-Pesa", "Organization"],
    default: "Cash",
  },
  amount: { type: Number, min: 0, required: true },
  serviceType: {
    type: String,
    enum: ["Consult", "Prescription", "TestOrder"],
    default: "Consult",
  },
  serviceId: {
    type: String,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

utilizationSchema.plugin(timestampPlugin);
const Utilization = mongoose.model("Utilization", utilizationSchema);
export = Utilization;
