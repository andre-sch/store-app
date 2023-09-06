import { Router } from "express";
import { createProductController } from "./features/CreateProduct";
import { listProductsController } from "./features/ListProducts";

const router = Router();

router.get("/products", (request, response) => {
  listProductsController.handle(request, response);
});

router.post("/products", (request, response) => {
  createProductController.handle(request, response);
});

export { router };
