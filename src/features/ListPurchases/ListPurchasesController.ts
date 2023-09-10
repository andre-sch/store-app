import { NextFunction, Request, Response } from "express";
import { ListPurchasesService } from "./ListPurchasesService";

export class ListPurchasesController {
  constructor(private listPurchasesService: ListPurchasesService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const purchases = await this.listPurchasesService.execute();
      response.json(purchases);
    } catch (error) {
      next(error);
    }
  }
}
