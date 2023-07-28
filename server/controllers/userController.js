import asyncHandler from 'express-async-handler';
import { prisma } from "../config/PrismaConfig.js"

export const createUser = asyncHandler(async(req,res) => {
    console.log("creating a user");

    let {email} = req.body;

    console.log(email);
});