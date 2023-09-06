import { Router } from "express";
import { createProductController } from "./features/CreateProduct";

const router = Router();
router.post("/products", (request, response) => {
  createProductController.handle(request, response);
});

export { router };
