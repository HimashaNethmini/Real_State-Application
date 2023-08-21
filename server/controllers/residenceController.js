import asyncHandler from "express-async-handler";
import { prisma } from "../config/PrismaConfig.js";

export const createResidency = asyncHandler(async(req, res) => {
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

            const residency = await prisma.residency.create({
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

            res.send({ message: "Residency created successfully",residency });

        }catch (err) {
            if(err.code === "P2002") {
                throw new Error(" Exist residency with the address");
            }
            throw new Error(err.message);
        }
});

// function to get all the documents/residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  });
  
  // function to get a specific document/residency filer by id
  export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const residency = await prisma.residency.findUnique({
        where: { 
          id: {
            equals: id,
          },
         }, //where id of the document = id we send thru the parameters
      });
      res.send(residency);
    } catch (err) {
      throw new Error(err.message);
    }
  });
