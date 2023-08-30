import express from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavourites, toFav } from "../controllers/userController.js";
import jwtCheck from "../../server/config/auth0Configure.js";

//making an express object
const router = express.Router()

router.post ("/register", jwtCheck, createUser); //create the user inside the usercontroller.js
router.post("/bookVisit/:id", jwtCheck, bookVisit); //allocate booking based on residence id
router.post("//allBookings", getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);

//favourite routes
router.post("/favadd/:rid",jwtCheck, toFav);
router.post("/getallFav", jwtCheck, getAllFavourites);
export { router as userRoute}