import { Purchase } from "../../entities/Purchase";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

export class ListPurchasesService {
  constructor(private purchasesRepository: IPurchasesRepository) {}

  public async execute(): Promise<Purchase[]> {
    return await this.purchasesRepository.list();
  }
}
