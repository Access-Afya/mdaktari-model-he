import mongoose from "mongoose";
import timestampPlugin from "../plugins/timestamp";

const testOrderSchema = new mongoose.Schema({
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

const TestOrderModel = mongoose.model("TestOrder", testOrderSchema);

export default TestOrderModel;
