import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  interviewDate: {
    type: Date,
    required: true,
  },
  allSkills: {
    type: [String],
    required: true,
  },
  selectedSkills: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Candidate", candidateSchema);


