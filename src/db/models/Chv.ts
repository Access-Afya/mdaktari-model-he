import { Schema, model } from "mongoose";

const chvSchema = new Schema(
  {
    dateOfBirth: { type: Date },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
      set: (value) => value.toUpperCase(),
    },
    accountStatus: {
      type: String,
      enum: ["Active", "Disabled"],
      default: "Active",
    },
    about: {
      type: String,
    },
    partyId: {
      type: Schema.Types.ObjectId,
      ref: "Party",
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
