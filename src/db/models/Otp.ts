import { model, Schema } from "mongoose";

const otpSchema = new Schema(
  {
    phoneNumber: String,
    password: String,
    expiresAt: Date,
    partyId: {
      type: Schema.Types.ObjectId,
      ref: "Party",
    },
  },
  { timestamps: true }
);

const OtpModel = model("otp", otpSchema);

export default OtpModel;
