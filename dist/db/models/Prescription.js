"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var prescriptionSchema = new mongoose_1.default.Schema({
    consultId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Consult" },
    patientId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    doctorId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Doctor" },
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
prescriptionSchema.plugin(timestamp_1.default);
var PrescriptionModel = mongoose_1.default.model("Prescription", prescriptionSchema);
exports.default = PrescriptionModel;
//# sourceMappingURL=Prescription.js.map