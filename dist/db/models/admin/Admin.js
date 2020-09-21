"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var validator = require("validator");
var timestampPlugin = require("../../plugins/timestamp");
var adminSchema = new mongoose.Schema({
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
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
adminSchema.plugin(timestampPlugin);
var Admin = mongoose.model("Admin", adminSchema);
exports = Admin;
//# sourceMappingURL=Admin.js.map