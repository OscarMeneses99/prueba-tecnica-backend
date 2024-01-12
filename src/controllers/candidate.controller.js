import { CandidateModel } from "../models/candidate.model.js";
import {
  validateCandidate,
  validatePartialCandidate,
} from "../validations/candidate.js";

export class CandidateController {
  static async getCandidates(req, res) {
    const candidates = await CandidateModel.getAll();
    if (candidates.length == 0)
      res.status(404).json({ message: "Candidates not found" });
    res.status(200).json(candidates);
  }
  static async createCandidate(req, res) {
    const validationResult = validateCandidate(req.body);
    if (!validationResult.success)
      res.status(400).json({ message: validationResult.error });
    const createdCandidate = await CandidateModel.create({ validationResult });
    res.status(201).json(createdCandidate);
  }
  static async updateCandidate(req, res) {
    const { id } = req.params;
    const validationResult = validatePartialCandidate(req.body);
    if (!validationResult.success)
      res.status(422).json({ error: validationResult.error.message });
    const updatedCandidate = await CandidateModel.update({
      id,
      validationResult,
    });
    if (!updatedCandidate)
      res.status(404).json({ message: "Candidate not found" });
    res.status(200).json(updatedCandidate);
  }
  static async deleteCandidate(req, res) {
    const { id } = req.params;
    const deletedCandidate = await CandidateModel.delete({ id });
    if (!deletedCandidate)
      res.status(404).json({ message: "Candidate not found" });
    res.status(200).json({ message: "Candidate deleted" });
  }
}
