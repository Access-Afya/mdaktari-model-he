"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var timestampPlugin = require("../plugins/timestamp");
var paymentSchema = new mongoose.Schema({
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
var Payment = mongoose.model("Payment", paymentSchema);
exports = Payment;
//# sourceMappingURL=Payment.js.map