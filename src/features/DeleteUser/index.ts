import { DeleteUserService } from "./DeleteUserService";
import { DeleteUserController } from "./DeleteUserController";
import { UsersPostgresRepository } from "../../repositories/implementations/UsersPostgresRepository";

const usersRepository = new UsersPostgresRepository();
const deleteUserService = new DeleteUserService(usersRepository);
const deleteUserController = new DeleteUserController(deleteUserService);

export const deleteUser = deleteUserController.handle.bind(deleteUserController);
