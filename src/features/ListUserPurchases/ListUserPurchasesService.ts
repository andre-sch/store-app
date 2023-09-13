import { Purchase } from "../../entities/Purchase";
import { OperationalError } from "../../errors/OperationalError";

import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUserPurchasesService {
  constructor(
    private usersRepository: IUsersRepository,
    private purchasesRepository: IPurchasesRepository
  ) {}

  public async execute(userId: string): Promise<Purchase[]> {
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new OperationalError("Requested user does not exist!");

    return await this.purchasesRepository.listByUser(userId);
  }
}
