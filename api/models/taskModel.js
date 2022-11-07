const mongoose = require("mongoose");

const tasSchema = mongoose.Schema({
  task: { type: String, required: true, min: 3 },
  isDone: { type: Boolean, required: true },
});

module.exports = mongoose.model("Task", tasSchema);
