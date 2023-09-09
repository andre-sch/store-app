import { User } from "../entities/User";

export interface IUsersRepository {
  list(): Promise<User[]>;
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(userId: string): Promise<void>;
  findById(userId: string): Promise<User | null>;
}
