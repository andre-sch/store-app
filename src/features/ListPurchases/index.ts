import { ListPurchasesService } from "./ListPurchasesService";
import { ListPurchasesController } from "./ListPurchasesController";
import { PurchasesPostgresRepository } from "../../repositories/implementations/PurchasesPostgresRepository";

const purchasesRepository = new PurchasesPostgresRepository();
const listPurchasesService = new ListPurchasesService(purchasesRepository);
const listPurchasesController = new ListPurchasesController(listPurchasesService);

export const listPurchases = listPurchasesController.handle.bind(listPurchasesController);
