const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,

  number: Number,
});

const Students = mongoose.model("Student", studentSchema);

module.exports = { Students };
