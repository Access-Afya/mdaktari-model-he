"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var validator = require("validator");
var timestampPlugin = require("../../plugins/timestamp");
var organizationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        lowercase: true,
        validate: function (value) {
            return validator.isEmail(value);
        },
    },
    phone: { type: String, required: true },
    name: { type: String },
    logoUrl: { type: String },
    quota: { type: Number },
    accountStatus: {
        type: String,
        enum: ["Active", "Disabled"],
        default: "Active",
    },
    admins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OrganizationAdmin",
        },
    ],
    aaAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
organizationSchema.plugin(timestampPlugin);
var Organization = mongoose.model("Organization", organizationSchema);
exports = Organization;
//# sourceMappingURL=Organization.js.map