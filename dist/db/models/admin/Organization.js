"use strict";
// import mongoose = require("mongoose");
var validator = require("validator");
var timestampPlugin = require("../../plugins/timestamp");
var mongoose = module.parent.exports.mongoose;
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
    quota: { type: Number, min: 0 },
    consultCharges: { type: Number, min: 0, default: 300 },
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
module.exports = Organization;
//# sourceMappingURL=Organization.js.map