import mongoose from "mongoose";
import validator from "validator";

import timestampPlugin from "../../plugins/timestamp";

const organizationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  phone: { type: String, required: true },
  name: { type: String },
  logoUrl: { type: String },
  quota: { type: Number, min: 0 },
  consultCharges: { type: Number, min: 0, default: 300 },
  accountStatus: {
    type: String,
    enum: ["Active", "Disabled"],
    default: "Active",
  },
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrganizationAdmin",
    },
  ],
  aaAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

organizationSchema.plugin(timestampPlugin);

const OrganizationModel = mongoose.model("Organization", organizationSchema);

export default OrganizationModel;
