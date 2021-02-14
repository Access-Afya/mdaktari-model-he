"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var chvSchema = new mongoose_1.Schema({
    dateOfBirth: { type: Date },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    accountStatus: {
        type: String,
        enum: ["Active", "Disabled"],
        default: "Active",
    },
    about: {
        type: String,
    },
    credentials: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "File",
        },
    ],
}, { timestamps: true });
var ChvModel = mongoose_1.model("Chv", chvSchema);
exports.default = ChvModel;
//# sourceMappingURL=Chv.js.map