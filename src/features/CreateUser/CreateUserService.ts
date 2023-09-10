import bcrypt from "bcrypt";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IUserCreationRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(request: IUserCreationRequest): Promise<User> {
    const { name, surname, email, password } = request;

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    const user = new User(name, surname, email, hash);

    await this.usersRepository.create(user);

    return user;
  }
}
