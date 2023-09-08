import { IProductsRepository } from "../../repositories/IProductsRepository";
import { OperationalError } from "../../errors/OperationalError";

interface IUpdateProductRequest {
  id: string;
  name?: string;
  description?: string;
  quantity?: number;
  price?: number;
}

export class UpdateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(request: IUpdateProductRequest): Promise<void> {
    const record = await this.productsRepository.findById(request.id);
    if (!record) throw new OperationalError("Requested product does not exist!");

    await this.productsRepository.update({
      id: request.id,
      name: request.name || record.name,
      description: request.description || record.description,
      quantity: request.quantity || record.quantity,
      price: request.price || record.price
    });
  }
}
