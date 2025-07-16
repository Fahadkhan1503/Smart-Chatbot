import express from "express";
import dotenv from "dotenv";
// import { connect } from 'mongoose';
import connectDb from "./database/db.js";

dotenv.config();
const app = express();

// using middlewares
app.use(express.json());

//importing routes
import userRoutes from "./routes/userRoutes.js";

//using routes
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
  connectDb();
});
