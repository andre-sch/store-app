import { UpdateUserService } from "./UpdateUserService";
import { UpdateUserController } from "./UpdateUserController";
import { UsersPostgresRepository } from "../../repositories/implementations/UsersPostgresRepository";

const usersRepository = new UsersPostgresRepository();
const updateUserService = new UpdateUserService(usersRepository);
const updateUserController = new UpdateUserController(updateUserService);

export const updateUser = updateUserController.handle.bind(updateUserController);
