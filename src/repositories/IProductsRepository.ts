import { Product } from "../entities/Product";

export interface IProductsRepository {
  create(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
}
