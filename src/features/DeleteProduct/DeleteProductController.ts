import { NextFunction, Request, Response } from "express";
import { DeleteProductService } from "./DeleteProductService";

export class DeleteProductController {
  constructor(private deleteProductService: DeleteProductService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { id: productId } = request.params;

    try {
      await this.deleteProductService.execute(productId);
      response.send();
    } catch (error) {
      next(error);
    }
  }
}
