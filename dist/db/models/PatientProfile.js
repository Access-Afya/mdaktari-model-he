"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var patientProfileSchema = new mongoose_1.default.Schema({
    allergies: { type: String },
    drugAllergies: { type: String },
    foodAllergies: { type: String },
    others: { type: String },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
patientProfileSchema.plugin(timestamp_1.default);
var PatientProfileModel = mongoose_1.default.model("PatientProfile", patientProfileSchema);
exports.default = PatientProfileModel;
//# sourceMappingURL=PatientProfile.js.map