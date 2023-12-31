import { NextFunction, Request, Response } from "express";
import { CreateProductService } from "./CreateProductService";

export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { name, description, price, quantity } = request.body;

    try {
      const product = await this.createProductService.execute({
        name,
        description,
        price,
        quantity
      });

      response.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
}
