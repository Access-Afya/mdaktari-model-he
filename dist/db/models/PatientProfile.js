"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var timestampPlugin = require("../plugins/timestamp");
var patientProfileSchema = new mongoose.Schema({
    allergies: { type: String },
    drugAllergies: { type: String },
    foodAllergies: { type: String },
    others: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    familyHistory: [
        {
            name: { type: String },
        },
    ],
    socialHistory: [
        {
            name: { type: String },
        },
    ],
    medicalHistory: [
        {
            name: { type: String },
        },
    ],
    medicalConditions: [
        {
            name: { type: String },
        },
    ],
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
patientProfileSchema.plugin(timestampPlugin);
var PatientProfile = mongoose.model("PatientProfile", patientProfileSchema);
exports = PatientProfile;
//# sourceMappingURL=PatientProfile.js.map