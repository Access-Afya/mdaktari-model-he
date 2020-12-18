"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var testOrderSchema = new mongoose_1.default.Schema({
    consultId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Consult" },
    patientId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    doctorId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Doctor" },
    name: { type: String },
    testType: { type: String },
    orderReason: { type: String },
    urgent: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
testOrderSchema.plugin(timestamp_1.default);
var TestOrderModel = mongoose_1.default.model("TestOrder", testOrderSchema);
exports.default = TestOrderModel;
//# sourceMappingURL=TestOrder.js.map