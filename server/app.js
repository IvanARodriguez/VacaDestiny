import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from  "morgan";
import userRouter from "./routes/userRoute.js";

//hide the db connection
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/users", userRouter); //http://localhost:500/users/signup

const MONGODB_URL = process.env.MONGODB_URL;

const port = 5000;

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`DB connected! \nThe server is running on port ${port}!`);
        });
}).catch(err => console.log(`${err} did not connect!`));