import asyncHandler from "express-async-handler";
import { prisma } from "../config/PrismaConfig.js";

export const createResidence = asyncHandler(async(req, res) => {
    const {
        title, 
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        userEmail} = req.body.data;

        console.log(req.body.data);
        try {
            
            const residence = await prisma.residence.create({
                data: {
                    title,
                    description,
                    price,
                    address,
                    country,
                    city,
                    facilities,
                    image,
                    owner: { connect: { email: userEmail } },
                },
            });

            res.send({ message: "Residence created successfully",residence });

        }catch (err) {
            if(err.code === "P2002") {
                throw new Error(" Exist residency with the address");
            }
            throw new Error(err.message);
        }
});
