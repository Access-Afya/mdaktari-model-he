"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var cheSchema = new mongoose_1.Schema({
    che_id: {
        type: Number,
    },
    che_names: {
        type: String,
    },
});
var CheModel = mongoose_1.model("Che", cheSchema, "che_master_list");
exports.default = CheModel;
//# sourceMappingURL=Che.js.map