"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var paymentSchema = new mongoose_1.default.Schema({
    consultId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Consult" },
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
paymentSchema.plugin(timestamp_1.default);
var PaymentModel = mongoose_1.default.model("Payment", paymentSchema);
exports.default = PaymentModel;
//# sourceMappingURL=Payment.js.map