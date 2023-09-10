import bcrypt from "bcrypt";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { OperationalError } from "../../errors/OperationalError";

interface IUserUpdateRequest {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

export class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(request: IUserUpdateRequest): Promise<User> {
    const record = await this.usersRepository.findById(request.id);
    if (!record) throw new OperationalError("Requested user does not exist!");

    const saltRounds = 10;
    const hash = request.password
      ? await bcrypt.hash(request.password, saltRounds)
      : undefined;

    const updatedUser = {
      id: request.id,
      name: request.name || record.name,
      surname: request.surname || record.surname,
      email: request.email || record.email,
      password: hash || record.password
    };

    await this.usersRepository.update(updatedUser);

    return updatedUser;
  }
}
