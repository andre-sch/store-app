import { Purchase } from "../entities/Purchase";

export interface IPurchasesRepository {
  list(): Promise<Purchase[]>;
  create(purchase: Purchase): Promise<void>;
}
