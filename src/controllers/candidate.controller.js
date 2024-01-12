import { CandidateModel } from "../models/candidate.model.js";

export class CandidateController {
  static async getCandidates(req, res) {
    const candidates = await CandidateModel.getAll();
    if (!candidates) res.status(404).json({ message: "Candidates not found" });
    res.status(200).json(candidates);
  }
  static async createCandidate(req, res) {
    const candidate = req.body;
    const createdCandidate = await CandidateModel.create({ candidate });
    res.status(201).json(createdCandidate);
  }
  static async updateCandidate(req, res) {
    const { id } = req.params;
    const candidate = req.body;
    const updatedCandidate = await CandidateModel.update({ id, candidate });
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
