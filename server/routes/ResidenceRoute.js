import express from "express";
import { createResidence } from "../controllers/residenceController.js";
const router = express.Router();

//endpoint
router.post("/create", createResidence)
export { router as residenceRoute}