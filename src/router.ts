import { Router } from "express";

import { listProducts } from "./features/ListProducts";
import { createProduct } from "./features/CreateProduct";
import { updateProduct } from "./features/UpdateProduct";
import { deleteProduct } from "./features/DeleteProduct";

const router = Router();

router.get("/products", listProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export { router };
