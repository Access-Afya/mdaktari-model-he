"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// Schema
var fileSchema = new mongoose_1.Schema({
    filename: {
        type: String,
        required: true,
        trim: true,
    },
    path: {
        type: String,
        required: true,
        trim: true,
    },
    partyId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Party",
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });
// Model
var FileModel = mongoose_1.model("File", fileSchema);
exports.default = FileModel;
//# sourceMappingURL=File.js.map