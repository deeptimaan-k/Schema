const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subName: {
    type: String,
    required: true,
  },
  subCode: {
    type: String,
    required: true,
  },
  sclassName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sclass",
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});

module.exports = mongoose.model("Subject", subjectSchema);
