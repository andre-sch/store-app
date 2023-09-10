import { NextFunction, Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { name, surname, email, password } = request.body;

    try {
      const user = await this.createUserService.execute({
        name,
        surname,
        email,
        password
      });

      response.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}
