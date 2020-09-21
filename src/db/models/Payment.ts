"use strict";
import mongoose = require("mongoose");
import timestampPlugin = require("../plugins/timestamp");

const paymentSchema = new mongoose.Schema({
  consultId: { type: mongoose.Schema.Types.ObjectId, ref: "Consult" },
  amount: { type: Number },
  msisdn: { type: String },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Success", "Failed"],
    default: "Pending",
  },
  merchantRequestID: { type: String },
  checkoutRequestID: { type: String },
  responseCode: { type: String },
  resultDesc: { type: String },
  responseDescription: { type: String },
  resultCode: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

paymentSchema.plugin(timestampPlugin);
const Payment = mongoose.model("Payment", paymentSchema);
exports = Payment;
