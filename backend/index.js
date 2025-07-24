import express from "express";
import dotenv from "dotenv";
// import { connect } from 'mongoose';
import connectDb from "./database/db.js";
import cors from "cors";

dotenv.config();
const app = express();

app.get("/1000", (req, res) => {
  res.send("Welcome to the smart chatbot  API");
});

// using middlewares
app.use(express.json());
app.use(cors());

//importing routes
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
//using routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
  connectDb();
});
