"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var validator = require("validator");
var timestampPlugin = require("../plugins/timestamp");
var doctorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        lowercase: true,
        validate: function (value) {
            return validator.isEmail(value);
        },
    },
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    phoneNumber: { type: String, required: true, unique: true },
    otpCode: { type: String },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    // accountType: {
    //   type: String,
    //   enum: ['Patient', 'Doctor', 'Admin'],
    //   default: 'Patient',
    // },
    accountStatus: {
        type: String,
        enum: ["Active", "Disabled"],
        default: "Active",
    },
    // TODO: move this stuff to DoctorProfile
    workingStatus: {
        type: String,
        enum: ["Offline", "Online"],
        default: "Offline",
    },
    // patientProfile: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'PatientProfile',
    // },
    doctorProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DoctorProfile",
    },
    // start doctor profile fields
    // end doctor profile fields
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
doctorSchema.plugin(timestampPlugin);
var Doctor = mongoose.model("Doctor", doctorSchema);
exports = Doctor;
//# sourceMappingURL=Doctor.js.map