import { User } from "../entities/User";

export interface IUsersRepository {
  list(): Promise<User[]>;
  create(user: User): Promise<void>;
}
