import express from "express";
import { createUser } from "../controllers/userController.js";

//making an express object
const router = express.Router()
router.post ("/register", createUser); //create the user inside the usercontroller.js

export { router as userRoute}