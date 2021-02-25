"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var icdCodeSchema = new mongoose_1.Schema({
    "ICD-10-CM CODE DESCRIPTION": {
        type: String,
        alias: "description",
    },
});
var ICDCodeModel = mongoose_1.model("ICDCode", icdCodeSchema, "src_icd_codes");
exports.default = ICDCodeModel;
//# sourceMappingURL=ICDCode.js.map