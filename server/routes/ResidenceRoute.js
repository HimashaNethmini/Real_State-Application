import express from "express";
import { createResidence, getAllResidencies, getAllResidency } from "../controllers/residenceController.js";
const router = express.Router();

//endpoint
router.post("/create", createResidence)
router.get("/allread", getAllResidency) //all
router.get("/:id", getAllResidencies) //provide details filter by id

export { router as residenceRoute}