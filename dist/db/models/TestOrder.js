"use strict";
// import mongoose = require("mongoose");
var timestampPlugin = require("../plugins/timestamp");
var mongoose = module.parent.exports.mongoose;
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
module.exports = TestOrder;
//# sourceMappingURL=TestOrder.js.map