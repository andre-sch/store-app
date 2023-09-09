import { IUsersRepository } from "../../repositories/IUsersRepository";
import { OperationalError } from "../../errors/OperationalError";

export class DeleteUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(userId: string): Promise<void> {
    const record = await this.usersRepository.findById(userId);
    if (!record) throw new OperationalError("Requested user does not exist!");

    this.usersRepository.delete(userId);
  }
}
