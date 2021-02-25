
import { Schema, model } from "mongoose";

const icdCodeSchema = new Schema({
  "ICD-10-CM CODE DESCRIPTION": {
    type: String,
    alias: "description",
  },
});

const ICDCodeModel = model("ICDCode", icdCodeSchema, "src_icd_codes");

export default ICDCodeModel;
