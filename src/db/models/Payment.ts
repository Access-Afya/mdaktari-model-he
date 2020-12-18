import mongoose from "mongoose";

import timestampPlugin from "../plugins/timestamp";

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

const PaymentModel = mongoose.model("Payment", paymentSchema);

export default PaymentModel;
