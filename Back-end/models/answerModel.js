const mongoose = require("../connection");
const Schema = mongoose.Schema;

const schema = new Schema({
  paper: { type: mongoose.Types.ObjectId, ref: "papers" },
  name: String,
  email: String,
  data: Object,
  password: String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("answers", schema);

module.exports = model;
