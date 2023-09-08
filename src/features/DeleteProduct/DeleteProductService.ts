import { IProductsRepository } from "../../repositories/IProductsRepository";
import { OperationalError } from "../../errors/OperationalError";

export class DeleteProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(productId: string): Promise<void> {
    const record = await this.productsRepository.findById(productId);
    if (!record) throw new OperationalError("Requested product does not exist!");

    await this.productsRepository.delete(productId);
  }
}
