import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { OperationalError } from "../../errors/OperationalError";

export interface IProductRequest {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export class CreateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(request: IProductRequest): Promise<void> {
    const { name, description, quantity, price } = request;
    const product = new Product(name, description, quantity, price);

    if (await this.productsRepository.findById(product.id))
      throw new OperationalError("Product ID is already taken!");

    await this.productsRepository.create(product);
  }
}
