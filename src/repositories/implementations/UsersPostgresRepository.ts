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
      text: "SELECT * FROM users"
    });

    return result.rows;
  }

  public async create({ id, name, surname, email, password }: User): Promise<void> {
    await this.client.query({
      text: "INSERT INTO users VALUES ($1, $2, $3, $4, $5)",
      values: [id, name, surname, email, password]
    });
  }

  public async update({ id, name, surname, email, password }: User): Promise<void> {
    await this.client.query({
      text: "UPDATE users SET name = $1, surname = $2, email = $3, password = $4 WHERE id = $5",
      values: [name, surname, email, password, id]
    });
  }

  public async delete(userId: string): Promise<void> {
    await this.client.query({
      text: "DELETE FROM users WHERE id = $1",
      values: [userId]
    });
  }

  public async findById(userId: string): Promise<User | null> {
    const { rows } = await this.client.query<User>({
      text: "SELECT * FROM users WHERE id = $1",
      values: [userId]
    });

    return rows.length == 0 ? null : rows[0];
  }
}
