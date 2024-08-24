const mongoose = require("mongoose");

const sclassSchema = new mongoose.Schema({
  sclassName: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    }
  ],
});

module.exports = mongoose.model("Sclass", sclassSchema);
