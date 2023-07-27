import { Express } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

//configuration of dotenv
dotenv.config()

//initialize application
const app = Express();