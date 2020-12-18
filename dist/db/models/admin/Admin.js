"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var validator_1 = __importDefault(require("validator"));
var timestamp_1 = __importDefault(require("../../plugins/timestamp"));
var adminSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: false,
        lowercase: true,
        validate: function (value) {
            return validator_1.default.isEmail(value);
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
adminSchema.plugin(timestamp_1.default);
var AdminModel = mongoose_1.default.model("Admin", adminSchema);
exports.default = AdminModel;
//# sourceMappingURL=Admin.js.map