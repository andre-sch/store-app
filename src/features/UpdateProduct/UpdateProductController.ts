import { NextFunction, Request, Response } from "express";
import { UpdateProductService } from "./UpdateProductService";

export class UpdateProductController {
  constructor(private updateProductService: UpdateProductService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = request.params;
    const { name, description, quantity, price } = request.body;

    try {
      const updatedProduct = await this.updateProductService.execute({
        id,
        name,
        description,
        quantity,
        price
      });

      response.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }
}
