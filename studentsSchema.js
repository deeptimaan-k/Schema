const mongoose = require("mongoose");

// Parent Details Schema
const parentDetailsSchema = new mongoose.Schema({
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherPhoneNo: {
    type: String,
    required: true,
  },
  motherPhoneNo: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Extra Activity Schema
const extraActivitySchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
  activities: [
    {
      name: {
        type: String,
        required: true,
      },
      level: {
        type: String,
        required: true, // e.g., School, State, National, International
      },
      achievement: {
        type: String,
      },
    },
  ],
});

// Exam Result Schema

const examResultSchema = new mongoose.Schema({
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

// Attendance Schema
const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true,
  },
  subName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
});

// Achievements Schema
const achievementSchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  competitionName: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

// Academic Performance Schema
const academicPerformanceSchema = new mongoose.Schema({
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

// Assignments Schema
const assignmentSchema = new mongoose.Schema({
  subName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  givenDate: {
    type: Date,
    required: true,
  },
  submissionDate: {
    type: Date,
    required: true,
  },
  completionStatus: {
    type: String,
    enum: ["Completed", "Pending"],
    required: true,
  },
  submissionStatus: {
    type: String,
    enum: ["Submitted", "Not Submitted"],
    required: true,
  },
  assessmentDescription: {
    type: String,
  },
  fileUploads: [
    {
      fileName: String,
      fileUrl: String,
    },
  ],
  totalMarks: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Submitted", "Pending", "Overdue"],
    required: true,
    default: "Pending", // Default status
  },
});


// Tests Schema
const testSchema = new mongoose.Schema({
  subName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  testDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

// Student Schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNum: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    adharNo: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
    },
    emergencyContact: {
      name: String,
      relation: String,
      phoneNo: String,
    },
    extraActivity: [extraActivitySchema],
    sclassName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sclass",
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    role: {
      type: String,
      default: "Student",
    },
    examResult: [examResultSchema],
    attendance: [attendanceSchema],
    achievements: [achievementSchema],
    parentDetails: parentDetailsSchema,
    academicPerformance: [academicPerformanceSchema],
    assignments: [assignmentSchema],
    tests: [testSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
