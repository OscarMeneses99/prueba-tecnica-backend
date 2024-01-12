import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Mostrar todos los candidatos");
});

router.post("/", (req, res) => {
  res.send("Crear un candidato");
});

router.patch("/:id", (req, res) => {
  res.send("Actualizar un candidato");
});

router.delete("/:id", (req, res) => {
  res.send("Eliminar un candidato");
});

export default router;
