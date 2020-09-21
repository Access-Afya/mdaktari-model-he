"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var timestampPlugin = require("../plugins/timestamp");
var testOrderSchema = new mongoose.Schema({
    consultId: { type: mongoose.Schema.Types.ObjectId, ref: "Consult" },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    name: { type: String },
    testType: { type: String },
    orderReason: { type: String },
    urgent: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
testOrderSchema.plugin(timestampPlugin);
var TestOrder = mongoose.model("TestOrder", testOrderSchema);
exports = TestOrder;
//# sourceMappingURL=TestOrder.js.map