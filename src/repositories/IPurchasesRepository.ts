import { Purchase } from "../entities/Purchase";

export interface IPurchasesRepository {
  list(): Promise<Purchase[]>;
  listByUser(userId: string): Promise<Purchase[]>;
  create(purchase: Purchase): Promise<void>;
}
