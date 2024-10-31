import express from "express";
import {
  getProductById,
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/Product.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProducts);
router.patch("/products/:id", updateProducts);
router.delete("/products/:id", deleteProducts);

export default router;
