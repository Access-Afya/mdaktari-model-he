import mongoose from "mongoose";

import timestampPlugin from "../../plugins/timestamp";

const utilizationSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
    enum: ["Cash", "M-Pesa", "Organization"],
    default: "Cash",
  },
  amount: { type: Number, min: 0, required: true },
  serviceType: {
    type: String,
    enum: ["Consult", "Prescription", "TestOrder"],
    default: "Consult",
  },
  serviceId: {
    type: String,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

utilizationSchema.plugin(timestampPlugin);

const UtilizationModel = mongoose.model("Utilization", utilizationSchema);

export default UtilizationModel;
