import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";

//Route Imports
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());  //to parse the incoming requests from JSON payloads (from req.body)
app.use(cookieParser()); //middleware for cookie

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running at port ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log("MongoDB Conntection has failed due to ", err);
})
