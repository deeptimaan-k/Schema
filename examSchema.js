const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  examName: {
    type: String,
    required: true,
  },
  examCode: {
    type: String,
    required: true,
  },
  sclassName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sclass",
    required: true,
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    }
  ],
  totalMarks: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});

module.exports = mongoose.model("Exam", examSchema);
