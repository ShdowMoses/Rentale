import express from "express";
import { Login, Me, LogOut } from "../controllers/Auth.js";

const router = express.Router();

// login route
router.post("/login", Login);

// personal info route
router.get("/me", Me);

// logout route
router.delete("/logout", LogOut);

export default router;
