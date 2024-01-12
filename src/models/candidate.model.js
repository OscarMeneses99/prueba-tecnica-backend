import CandidateSchema from "../schemas/candidate.schema.js";

export class CandidateModel {
  static async getAll() {
    return CandidateSchema.find();
  }
  static async create({ candidate }) {
    const newCandidate = new CandidateSchema(candidate);
    return newCandidate.save();
  }
  static async update({ id, candidate }) {
    const updatedMovie = await Movie.findByIdAndUpdate(id, candidate.data, {
      new: true,
    });
    if (!updatedMovie) return false;
    return updatedMovie;
  }
  static async delete({ id }) {
    return CandidateSchema.findByIdAndDelete(id);
  }
}
