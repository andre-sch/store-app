import { Client } from "pg";
import { createConnection } from "../../database/connection";

import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsPostgresRepository implements IProductsRepository {
  private client: Client;

  constructor() {
    createConnection().then((client) => (this.client = client));
  }

  public async list(): Promise<Product[]> {
    const result = await this.client.query<Product>({
      text: "SELECT * FROM Products"
    });

    return result.rows;
  }

  public async create(product: Product): Promise<void> {
    const { id, name, description, quantity, price } = product;

    await this.client.query({
      text: "INSERT INTO Products VALUES ($1, $2, $3, $4, $5)",
      values: [id, name, description, quantity, price]
    });
  }

  public async findById(productId: string): Promise<Product | null> {
    const { rows } = await this.client.query<Product>({
      text: "SELECT * FROM Products WHERE id = $1",
      values: [productId]
    });

    return rows.length == 0 ? null : rows[0];
  }
}
