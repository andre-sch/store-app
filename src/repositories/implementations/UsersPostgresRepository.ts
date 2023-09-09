import { Client } from "pg";
import { createConnection } from "../../database/connection";

import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersPostgresRepository implements IUsersRepository {
  private client: Client;

  constructor() {
    createConnection().then((client) => (this.client = client));
  }

  public async list(): Promise<User[]> {
    const result = await this.client.query<User>({
      text: "SELECT * FROM Users"
    });

    return result.rows;
  }

  public async create({ id, name, surname, email, password }: User): Promise<void> {
    await this.client.query({
      text: "INSERT INTO Users VALUES ($1, $2, $3, $4, $5)",
      values: [id, name, surname, email, password]
    });
  }
}
