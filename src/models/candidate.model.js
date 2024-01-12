import CandidateSchema from "../schemas/candidate.schema.js";

export class CandidateModel {
  static async getAll() {
    try {
      return CandidateSchema.find();
    } catch (err) {
      console.log(err);
    }
  }
  static async create({ validationResult }) {
    try {
      const newCandidate = new CandidateSchema(validationResult.data);
      return newCandidate.save();
    } catch (err) {
      console.log(err);
    }
  }
  static async update({ id, validationResult }) {
    try {
      const updatedMovie = await CandidateSchema.findByIdAndUpdate(
        id,
        validationResult.data,
        {
          new: true,
        }
      );
      if (!updatedMovie) return false;
      return updatedMovie;
    } catch (err) {
      console.log(err);
    }
  }
  static async delete({ id }) {
    try {
      return CandidateSchema.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
  }
}
