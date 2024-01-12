import { Router } from "express";
import { CandidateController } from "../controllers/candidate.controller.js";

const router = Router();

router.get("/", CandidateController.getCandidates);

router.post("/", CandidateController.createCandidate);

router.patch("/:id", CandidateController.updateCandidate);

router.delete("/:id", CandidateController.deleteCandidate);

export default router;
