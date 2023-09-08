import { NextFunction, Request, Response } from "express";
import { ListProductsService } from "./ListProductsService";

export class ListProductsController {
  constructor(private listProductsService: ListProductsService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const products = await this.listProductsService.execute();
      response.json(products);
    } catch (error) {
      next(error);
    }
  }
}
