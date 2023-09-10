import { NextFunction, Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { id: userId } = request.params;

    try {
      await this.deleteUserService.execute(userId);
      response.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
