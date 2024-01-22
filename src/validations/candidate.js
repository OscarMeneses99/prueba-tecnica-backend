import z from "zod";

const candidateSchema = z.object({
  name: z.string().min(10).max(50),
  age: z.number().positive().min(18).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  interviewDate: z.string().min(10).max(10),
  skills: z.string(),
});

export function validateCandidate(candidate) {
  return candidateSchema.safeParse(candidate);
}

export function validatePartialCandidate(candidate) {
  return candidateSchema.partial().safeParse(candidate);
}
