import express from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings } from "../controllers/userController.js";

//making an express object
const router = express.Router()
router.post ("/register", createUser); //create the user inside the usercontroller.js
router.post("/bookVisit/:id", bookVisit); //allocate booking based on residence id
router.get("//allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);

export { router as userRoute}