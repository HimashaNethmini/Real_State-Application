import express from "express";
import { createResidency, getAllResidencies, getResidency } from "../controllers/residenceController.js";
import jwtCheck from "../config/auth0Configure.js";

const router = express.Router();

//endpoint
router.post("/create", jwtCheck, createResidency)
router.get("/allresd", getAllResidencies) //all
router.get("/:id", getResidency) //provide details filter by id

export { router as residenceRoute}