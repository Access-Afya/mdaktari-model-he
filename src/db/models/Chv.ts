import { Schema, model } from "mongoose";

const chvSchema = new Schema(
  {
    dateOfBirth: { type: Date },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    accountStatus: {
      type: String,
      enum: ["Active", "Disabled"],
      default: "Active",
    },
    about: {
      type: String,
    },
    credentials: [
      {
        type: Schema.Types.ObjectId,
        ref: "File",
      },
    ],
  },
  { timestamps: true }
);

const ChvModel = model("Chv", chvSchema);

export default ChvModel;
