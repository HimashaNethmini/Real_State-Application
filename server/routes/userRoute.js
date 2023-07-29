import express from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavourites, toFav } from "../controllers/userController.js";

//making an express object
const router = express.Router()
router.post ("/register", createUser); //create the user inside the usercontroller.js
router.post("/bookVisit/:id", bookVisit); //allocate booking based on residence id
router.post("//allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);

//favourite routes
router.post("/favadd/:rid", toFav);
router.post("/getallFav", getAllFavourites);
export { router as userRoute}