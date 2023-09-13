import { Router } from "express";

import { listProducts } from "./features/ListProducts";
import { createProduct } from "./features/CreateProduct";
import { updateProduct } from "./features/UpdateProduct";
import { deleteProduct } from "./features/DeleteProduct";

import { listUsers } from "./features/ListUsers";
import { createUser } from "./features/CreateUser";
import { updateUser } from "./features/UpdateUser";
import { deleteUser } from "./features/DeleteUser";

import { listPurchases } from "./features/ListPurchases";
import { listUserPurchases } from "./features/ListUserPurchases";
import { createPurchase } from "./features/CreatePurchase";

const router = Router();

router.get("/products", listProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/users", listUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/users/:id/purchases", listUserPurchases);

router.get("/purchases", listPurchases);
router.post("/purchases", createPurchase);

export { router };
