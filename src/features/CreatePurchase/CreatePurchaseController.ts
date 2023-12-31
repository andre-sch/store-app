import { NextFunction, Request, Response } from "express";
import { CreatePurchaseService } from "./CreatePurchaseService";

export class CreatePurchaseController {
  constructor(private createPurchaseService: CreatePurchaseService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { userId, productId, shippingAddress, payment, quantity } = request.body;

    try {
      const purchase = await this.createPurchaseService.execute({
        userId,
        productId,
        shippingAddress,
        payment,
        quantity
      });

      response.status(201).json(purchase);
    } catch (error) {
      next(error);
    }
  }
}
