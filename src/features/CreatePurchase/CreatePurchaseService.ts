import { Purchase } from "../../entities/Purchase";
import { OperationalError } from "../../errors/OperationalError";

import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IPurchaseRequest {
  userId: string;
  productId: string;
  shippingAddress: string;
  payment: string;
  quantity: number;
}

export class CreatePurchaseService {
  constructor(
    private usersRepository: IUsersRepository,
    private productsRepository: IProductsRepository,
    private purchasesRepository: IPurchasesRepository
  ) {}

  public async execute(request: IPurchaseRequest): Promise<void> {
    const { userId, productId, shippingAddress, payment } = request;

    const user = await this.usersRepository.findById(userId);
    if (!user) throw new OperationalError("User does not exist!");

    const product = await this.productsRepository.findById(productId);
    if (!product) throw new OperationalError("Product does not exist!");

    const remainingQuantity = product.quantity - request.quantity;

    if (remainingQuantity < 0)
      throw new OperationalError("Quantity requested is greater than available!");

    const purchase = new Purchase(
      userId,
      productId,
      shippingAddress,
      payment,
      request.quantity
    );

    await this.purchasesRepository.create(purchase);
    await this.productsRepository.update({ ...product, quantity: remainingQuantity });
  }
}
