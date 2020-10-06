"use strict";
// import mongoose = require("mongoose");
var timestampPlugin = require("../../plugins/timestamp");
var mongoose = module.parent.exports.mongoose;
var utilizationSchema = new mongoose.Schema({
    paymentMethod: {
        type: String,
        enum: ["SelfPay", "GroupSponsor"],
        default: "SelfPay",
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
var Utilization = mongoose.model("Utilization", utilizationSchema);
module.exports = Utilization;
//# sourceMappingURL=Utilization.js.map