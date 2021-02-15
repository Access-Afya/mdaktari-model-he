"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var validator_1 = __importDefault(require("validator"));
var mongoose_fuzzy_searching_1 = __importDefault(require("mongoose-fuzzy-searching"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var userSchema = new mongoose_1.default.Schema({
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
    chvName: { type: String },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 13,
        maxlength: 13,
        trim: true,
    },
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "PatientProfile",
    },
    organization: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Organization" }],
    membershipExpiry: { type: Date },
    quota: { type: Number, min: 0, default: 0 },
    consultsLimit: { type: Number, min: 0, default: 0 },
    utilization: { type: Number, min: 0, default: 0 },
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
userSchema.plugin(timestamp_1.default);
userSchema.plugin(mongoose_fuzzy_searching_1.default, {
    fields: ["firstName", "lastName", "email", "phoneNumber"],
});
var UserModel = mongoose_1.default.model("User", userSchema);
exports.default = UserModel;
//# sourceMappingURL=User.js.map