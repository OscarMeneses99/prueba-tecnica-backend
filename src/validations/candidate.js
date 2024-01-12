import z from "zod";

const candidateSchema = z.object({
  name: z.string(),
  age: z.number().positive(),
  email: z.string().email(),
  phone: z.string(),
  interviewDate: z.string(),
  skills: z.string(),
});

export function validateCandidate(candidate) {
  return candidateSchema.safeParse(candidate);
}

export function validatePartialCandidate(candidate) {
  return candidateSchema.partial().safeParse(candidate);
}
