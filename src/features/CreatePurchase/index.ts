import { CreatePurchaseService } from "./CreatePurchaseService";
import { CreatePurchaseController } from "./CreatePurchaseController";

import { PurchasesPostgresRepository } from "../../repositories/implementations/PurchasesPostgresRepository";
import { ProductsPostgresRepository } from "../../repositories/implementations/ProductsPostgresRepository";
import { UsersPostgresRepository } from "../../repositories/implementations/UsersPostgresRepository";

const usersRepository = new UsersPostgresRepository();
const productsRepository = new ProductsPostgresRepository();
const purchasesRepository = new PurchasesPostgresRepository();

const createPurchaseService = new CreatePurchaseService(
  usersRepository,
  productsRepository,
  purchasesRepository
);

const createPurchaseController = new CreatePurchaseController(createPurchaseService);

export const createPurchase = createPurchaseController.handle.bind(
  createPurchaseController
);
