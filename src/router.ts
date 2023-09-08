import { Router } from "express";

import { listProducts } from "./features/ListProducts";
import { createProduct } from "./features/CreateProduct";

const router = Router();

router.get("/products", listProducts);
router.post("/products", createProduct);

export { router };
