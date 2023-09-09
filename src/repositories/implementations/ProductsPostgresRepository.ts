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
      text: "SELECT * FROM products"
    });

    return result.rows;
  }

  public async create(product: Product): Promise<void> {
    const { id, name, description, quantity, price } = product;

    await this.client.query({
      text: "INSERT INTO products VALUES ($1, $2, $3, $4, $5)",
      values: [id, name, description, quantity, price]
    });
  }

  public async update(product: Product): Promise<void> {
    const { id, name, description, quantity, price } = product;

    await this.client.query({
      text: "UPDATE products SET name = $1, description = $2, quantity = $3, price = $4 WHERE id = $5",
      values: [name, description, quantity, price, id]
    });
  }

  public async delete(productId: string): Promise<void> {
    await this.client.query({
      text: "DELETE FROM products WHERE id = $1",
      values: [productId]
    });
  }

  public async findById(productId: string): Promise<Product | null> {
    const { rows } = await this.client.query<Product>({
      text: "SELECT * FROM products WHERE id = $1",
      values: [productId]
    });

    return rows.length == 0 ? null : rows[0];
  }
}
