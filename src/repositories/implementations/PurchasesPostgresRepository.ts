import { Client } from "pg";
import { createConnection } from "../../database/connection";

import { Purchase } from "../../entities/Purchase";
import { IPurchasesRepository } from "../IPurchasesRepository";

export class PurchasesPostgresRepository implements IPurchasesRepository {
  private client: Client;

  constructor() {
    createConnection().then((client) => (this.client = client));
  }

  public async create({
    id,
    userId,
    productId,
    shippingAddress,
    payment,
    quantity
  }: Purchase): Promise<void> {
    await this.client.query({
      text: "INSERT INTO purchases VALUES ($1, $2, $3, $4, $5, $6)",
      values: [id, userId, productId, shippingAddress, payment, quantity]
    });
  }
}
