"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var validator_1 = __importDefault(require("validator"));
var timestamp_1 = __importDefault(require("../../plugins/timestamp"));
var organizationSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: false,
        lowercase: true,
        validate: function (value) {
            return validator_1.default.isEmail(value);
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "OrganizationAdmin",
        },
    ],
    aaAdmin: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Admin" },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
organizationSchema.plugin(timestamp_1.default);
var OrganizationModel = mongoose_1.default.model("Organization", organizationSchema);
exports.default = OrganizationModel;
//# sourceMappingURL=Organization.js.map