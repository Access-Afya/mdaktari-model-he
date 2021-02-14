import { model, Schema } from "mongoose";

// Schema
const partySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    alias: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Model
const PartyModel = model("Party", partySchema);

export default PartyModel;
