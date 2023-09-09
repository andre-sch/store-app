import { NextFunction, Request, Response } from "express";
import { ListUsersService } from "./ListUsersService";

export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await this.listUsersService.execute();
      response.json(users);
    } catch (error) {
      next(error);
    }
  }
}
