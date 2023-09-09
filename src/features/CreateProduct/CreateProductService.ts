import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export interface IProductCreationRequest {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export class CreateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(request: IProductCreationRequest): Promise<void> {
    const { name, description, quantity, price } = request;

    const product = new Product(name, description, quantity, price);

    await this.productsRepository.create(product);
  }
}
