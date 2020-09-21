"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var timestampPlugin = require("../plugins/timestamp");
var prescriptionSchema = new mongoose.Schema({
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
var Prescription = mongoose.model("Prescription", prescriptionSchema);
exports = Prescription;
//# sourceMappingURL=Prescription.js.map