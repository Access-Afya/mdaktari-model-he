"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var doctorProfileSchema = new mongoose_1.default.Schema({
    doctor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Doctor" },
    speciality: { type: String },
    insurance: { type: String },
    medicalSchool: { type: String },
    residency: { type: String },
    currentWork: { type: String },
    yearsExperience: { type: String },
    consultPrice: { type: String },
    description: { type: String },
    certifications: [
        {
            name: { type: String, required: true },
        },
    ],
    languages: [
        {
            name: { type: String, required: true },
        },
    ],
    subspecialities: [
        {
            name: { type: String, required: true },
        },
    ],
    awards: [
        {
            name: { type: String, required: true },
        },
    ],
    otherEducation: [
        {
            name: { type: String, required: true },
        },
    ],
    pastWork: [
        {
            name: { type: String, required: true },
        },
    ],
    credentials: [
        {
            name: { type: String, required: true },
        },
    ],
    memberships: [
        {
            name: { type: String, required: true },
        },
    ],
    qualificationType: {
        type: String,
        enum: ["Doctor", "RCO"],
        default: "Doctor",
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
doctorProfileSchema.plugin(timestamp_1.default);
var DoctorProfileModel = mongoose_1.default.model("DoctorProfile", doctorProfileSchema);
exports.default = DoctorProfileModel;
//# sourceMappingURL=DoctorProfile.js.map