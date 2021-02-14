import { model, Schema } from "mongoose";

// Schema
const fileSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
      trim: true,
    },

    path: {
      type: String,
      required: true,
      trim: true,
    },

    partyId: {
      type: Schema.Types.ObjectId,
      ref: "Party",
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
const FileModel = model("File", fileSchema);

export default FileModel;
