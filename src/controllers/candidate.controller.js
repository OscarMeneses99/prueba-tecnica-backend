import { CandidateModel } from "../models/candidate.model.js";
import {
  validateCandidate,
  validatePartialCandidate,
} from "../validations/candidate.js";

export class CandidateController {
  static async getCandidates(req, res) {
    try {
      const candidates = await CandidateModel.getAll();
      res.status(200).json(candidates);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async createCandidate(req, res) {
    try {
      const validationResult = validateCandidate(req.body);
      if (!validationResult.success)
        res.status(400).json({ message: validationResult.error });
      const createdCandidate = await CandidateModel.create({
        validationResult,
      });
      res.status(201).json(createdCandidate);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async updateCandidate(req, res) {
    try {
      const { id } = req.params;
      const validationResult = validatePartialCandidate(req.body);
      if (!validationResult.success)
        res.status(400).json({ error: validationResult.error.message });
      const updatedCandidate = await CandidateModel.update({
        id,
        validationResult,
      });
      if (!updatedCandidate)
        res.status(404).json({ message: "Candidate not found" });
      res.status(200).json(updatedCandidate);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async deleteCandidate(req, res) {
    try {
      const { id } = req.params;
      const deletedCandidate = await CandidateModel.delete({ id });
      if (!deletedCandidate)
        res.status(404).json({ message: "Candidate not found" });
      res.status(200).json({ message: "Candidate deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
