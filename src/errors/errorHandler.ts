import { NextFunction, Request, Response } from "express";
import { OperationalError } from "./OperationalError";

export function errorHandler(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  if (error instanceof OperationalError)
    response.status(400).json({ message: error.message });
  else response.status(500).json({ message: "Internal Server Error" });

  next(error);
}
