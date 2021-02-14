import { model, Schema } from "mongoose";

const otpSchema = new Schema(
  {
    phoneNumber: { type: String },
    password: { type: String },
    expiresAt: { type: Date },
  },
  { timestamps: true }
);

const OtpModel = model("Otp", otpSchema);

export default OtpModel;
