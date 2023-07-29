import asyncHandler from 'express-async-handler';
import { prisma } from "../config/PrismaConfig.js"

export const createUser = asyncHandler(async(req,res) => {
    console.log("creating a user");

    let {email} = req.body; 

    //checking user is exisiting, if not create an account
    const userExists = await prisma.user.findUnique({where: {email: email}})
    if(!userExists) {
        const user = await prisma.user.create({data: req.body});
        res.send ({
            message: "User registered successfully",
            user: user,
        });
    }else res.send(201).send({message: "User already exist"});

});

//create booking visit crud
export const bookVisit = asyncHandler(async(req,res) => {
    const {email, date} = req.body
    const {id} = req.params

    try {

        const alreadyBooked = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })

        if (alreadyBooked.bookedVisits.some((visit)=> visit.id === id)){
            res.status(400).json ({message: "Already booked"})
        }
        else {
            await prisma.user.update({
                where: {email: email},
                data: {
                    bookedVisits: {push: {id,date}}
                },
            });
            res.send("Congratulations..Visit is booked successfully")
        }
    }catch(err){
        throw new Error(err.message)
    }
});

//function to get all the booking of the user
export const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
      const bookings = await prisma.user.findUnique({
        where: { email },
        select: { bookedVisits: true },
      });
      res.status(200).send(bookings);
    } catch (err) {
      throw new Error(err.message);
    }
  });

  //delete booking visit crud
  export const cancelBooking = asyncHandler(async (req,res)=> {
    const {email} = req.body;
    const {id} = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        });

        const index = user.bookedVisits.findIndex((visit)=> visit.id === id);

        if (index === -1){
            res.status(404).json({message: "Booking not found"});
        }else {
            user.bookedVisits.splice(index,1);
            await prisma.user.update({
                where: {email},
                data: {
                    bookedVisits: user.bookedVisits
                },
            });

            res.send("Booking cancelled successfully")
        }
    }catch(err){
        throw new Error(err.message);
    }
  });