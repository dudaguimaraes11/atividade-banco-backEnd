import { Router } from "express";
import * as BruxoController from './../controllers/bruxoControllers.js'

const router = Router();

// Rota GetAll em / 
router.get("/", BruxoController.listarTodos);

// Rota GetById
router.get ("/:id", BruxoController.listarUm);

// Rota Create
router.post("/", BruxoController.criar);

// Rota Delete 
router.delete("/:id", BruxoController.apagar); 

// Rota Update 
router.put("/:id", BruxoController.atualizar); 

export default router;
