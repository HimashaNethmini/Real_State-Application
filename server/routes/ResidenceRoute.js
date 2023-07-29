import express from "express";
import { createResidence, getAllResidency } from "../controllers/residenceController.js";
const router = express.Router();

//endpoint
router.post("/create", createResidence)
router.get("/allread", getAllResidency)

export { router as residenceRoute}