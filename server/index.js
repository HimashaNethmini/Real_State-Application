import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { residenceRoute } from "./routes/ResidenceRoute.js";

//configuration of dotenv
dotenv.config()

//initialize application
const app = express();

//import port no. in the env file
const PORT = process.env.PORT || 3000;
//fallback - 3000 if 8000 port isn't working

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
});

app.use('/api/user', userRoute)
app.use('/api/residence', residenceRoute)
