"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../../plugins/timestamp"));
var utilizationSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
    },
    patient: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
utilizationSchema.plugin(timestamp_1.default);
var UtilizationModel = mongoose_1.default.model("Utilization", utilizationSchema);
exports.default = UtilizationModel;
//# sourceMappingURL=Utilization.js.map