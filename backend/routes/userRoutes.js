import express from "express";
import { loginUser, verifyUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);

export default router;
