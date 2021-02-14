import { model, Schema } from "mongoose";

const otpSchema = new Schema(
  {
    phoneNumber: { type: String },
    password: { type: String },
    expiresAt: { type: Date },
    party: {
      type: Schema.Types.ObjectId,
      ref: "Party",
    },
  },
  { timestamps: true }
);

const OtpModel = model("Otp", otpSchema);

export default OtpModel;
