import { Product } from "../entities/Product";

export interface IProductsRepository {
  list(): Promise<Product[]>;
  create(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
}
