import express from "express";
import {
  getProductById,
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/Product.js";
const router = express.Router();
import { verifyUser } from "../middleware/AuthUser.js";

// get all product
router.get("/products", verifyUser, getProducts);
// get product by id
router.get("/products/:id", verifyUser, getProductById);
// create product
router.post("/products", verifyUser, createProducts);
// update product
router.patch("/products/:id", verifyUser, updateProducts);
// delete product
router.delete("/products/:id", verifyUser, deleteProducts);

export default router;
