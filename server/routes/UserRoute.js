import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// get all user
router.get("/users", verifyUser, adminOnly, getUsers);
// get user by id
router.get("/users/:id", verifyUser, adminOnly, getUserById);
// create user
router.post("/users", verifyUser, adminOnly, createUser);
// update user
router.patch("/users/:id", verifyUser, adminOnly, updateUser);
// delete user
router.delete("/users/:id", verifyUser, adminOnly, deleteUser);

export default router;
