import { Product } from "../entities/Product";

export interface IProductsRepository {
  list(): Promise<Product[]>;
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(productId: string): Promise<void>;
  findById(productId: string): Promise<Product | null>;
}
