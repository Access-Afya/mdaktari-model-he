import { Schema, model } from "mongoose";

const cheSchema = new Schema({
  che_id: {
    type: Number,
  },
  che_names: {
    type: String,
  },
});

const CheModel = model("Che", cheSchema, "che_master_list");

export default CheModel;
