const mongoose = require("mongoose");
const { Schema } = mongoose;

const zorkSchema = new Schema({
  zork: Number,
  message: String,
  option1: String,
  option2: String,
  option3: String,
  outcome1: Number,
  outcome2: Number,
  outcome3: Number,
});
const Zork = mongoose.model("Zork", zorkSchema);

module.exports = Zork;
