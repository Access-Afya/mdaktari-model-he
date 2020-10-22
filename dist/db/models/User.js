"use strict";
// import mongoose = require("mongoose");
var validator = require("validator");
var timestampPlugin = require("../plugins/timestamp");
var mongoose = module.parent.exports.mongoose;
var userSchema = new mongoose.Schema({
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
    accountStatus: {
        type: String,
        enum: ["Active", "Disabled"],
        default: "Active",
    },
    patientProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PatientProfile",
    },
    organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
    membershipExpiry: { type: Date },
    quota: { type: Number, min: 0, default: 0 },
    consultsLimit: { type: Number, min: 0, default: 0 },
    // csv start
    fullname: { type: String },
    chartId: { type: String },
    firstAppointmentDate: { type: Date },
    lastAppointmentDate: { type: Date },
    firstRegistrationDate: { type: Date },
    lastMembershipRenewal: { type: Date },
    renewalStatus: { type: String },
    validity: { type: String },
    monthsInUse: { type: String },
    customerType: { type: String },
    residenceRegion: { type: String },
    occupation: { type: String },
    howDidYouHearAboutUs: { type: String },
    // csv end
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
userSchema.plugin(timestampPlugin);
var User = mongoose.model("User", userSchema);
module.exports = User;
//# sourceMappingURL=User.js.map