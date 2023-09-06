import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class ListProductsService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(): Promise<Product[]> {
    return await this.productsRepository.list();
  }
}
