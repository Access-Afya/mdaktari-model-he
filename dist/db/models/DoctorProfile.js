"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var timestampPlugin = require("../plugins/timestamp");
var doctorProfileSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
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
doctorProfileSchema.plugin(timestampPlugin);
var DoctorProfile = mongoose.model("DoctorProfile", doctorProfileSchema);
exports = DoctorProfile;
//# sourceMappingURL=DoctorProfile.js.map