"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var otpSchema = new mongoose_1.Schema({
    phoneNumber: { type: String },
    password: { type: String },
    expiresAt: { type: Date },
    partyId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Party",
    },
}, { timestamps: true });
var OtpModel = mongoose_1.model("Otp", otpSchema);
exports.default = OtpModel;
//# sourceMappingURL=Otp.js.map