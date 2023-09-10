import { Purchase } from "../entities/Purchase";

export interface IPurchasesRepository {
  create(purchase: Purchase): Promise<void>;
}
