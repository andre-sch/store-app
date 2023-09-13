import { NextFunction, Request, Response } from "express";
import { ListUserPurchasesService } from "./ListUserPurchasesService";

export class ListUserPurchasesController {
  constructor(private listUserPurchasesService: ListUserPurchasesService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { id: userId } = request.params;

    try {
      const userPurchases = await this.listUserPurchasesService.execute(userId);
      response.json(userPurchases);
    } catch (error) {
      next(error);
    }
  }
}
