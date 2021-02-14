"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// Schema
var partySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    alias: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
}, { timestamps: true });
// Model
var PartyModel = mongoose_1.model("Party", partySchema);
exports.default = PartyModel;
//# sourceMappingURL=Party.js.map