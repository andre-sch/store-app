import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(): Promise<User[]> {
    return await this.usersRepository.list();
  }
}
