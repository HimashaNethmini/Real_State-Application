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
    }else res.send(201).json({message: "User already exist"});

});