import mongoose from "mongoose";
import { date } from "zod";

const candidateSchema = new mongoose.Schema(
  {
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
    phone: {
      type: String,
      required: true,
    },
    interviewDate: {
      type: String,
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Candidate", candidateSchema);
