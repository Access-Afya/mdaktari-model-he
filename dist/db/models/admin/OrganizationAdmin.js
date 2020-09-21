"use strict";
// import mongoose = require("mongoose");
var validator = require("validator");
var timestampPlugin = require("../../plugins/timestamp");
var mongoose = module.parent.exports.mongoose;
var organizationAdminSchema = new mongoose.Schema({
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
    adminAccountType: {
        type: String,
        enum: ["Primary", "Secondary"],
        default: "Primary",
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
organizationAdminSchema.plugin(timestampPlugin);
var OrganizationAdmin = mongoose.model("OrganizationAdmin", organizationAdminSchema);
module.exports = OrganizationAdmin;
//# sourceMappingURL=OrganizationAdmin.js.map