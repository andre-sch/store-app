import { NextFunction, Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = request.params;
    const { name, surname, email, password } = request.body;

    try {
      const updatedUser = await this.updateUserService.execute({
        id,
        name,
        surname,
        email,
        password
      });

      response.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
