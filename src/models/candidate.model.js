import CandidateSchema from "../schemas/candidate.schema.js";

export class CandidateModel {
  static async getAll() {
    return CandidateSchema.find();
  }
  static async create({ validationResult }) {
    const newCandidate = new CandidateSchema(validationResult.data);
    return newCandidate.save();
  }
  static async update({ id, validationResult }) {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      validationResult.data,
      {
        new: true,
      }
    );
    if (!updatedMovie) return false;
    return updatedMovie;
  }
  static async delete({ id }) {
    return CandidateSchema.findByIdAndDelete(id);
  }
}
