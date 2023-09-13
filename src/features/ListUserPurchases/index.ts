import { ListUserPurchasesService } from "./ListUserPurchasesService";
import { ListUserPurchasesController } from "./ListUserPurchasesController";

import { PurchasesPostgresRepository } from "../../repositories/implementations/PurchasesPostgresRepository";
import { UsersPostgresRepository } from "../../repositories/implementations/UsersPostgresRepository";

const usersRepository = new UsersPostgresRepository();
const purchasesRepository = new PurchasesPostgresRepository();

const listUserPurchasesService = new ListUserPurchasesService(
  usersRepository,
  purchasesRepository
);

const listUserPurchasesController = new ListUserPurchasesController(
  listUserPurchasesService
);

export const listUserPurchases = listUserPurchasesController.handle.bind(
  listUserPurchasesController
);
