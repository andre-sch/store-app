import { Product } from "../../entities/Product";
import { OperationalError } from "../../errors/OperationalError";

import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IProductUpdateRequest {
  id: string;
  name?: string;
  description?: string;
  quantity?: number;
  price?: number;
}

export class UpdateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(request: IProductUpdateRequest): Promise<Product> {
    const record = await this.productsRepository.findById(request.id);
    if (!record) throw new OperationalError("Requested product does not exist!");

    const updatedProduct = {
      id: request.id,
      name: request.name || record.name,
      description: request.description || record.description,
      quantity: request.quantity || record.quantity,
      price: request.price || record.price
    };

    await this.productsRepository.update(updatedProduct);

    return updatedProduct;
  }
}
