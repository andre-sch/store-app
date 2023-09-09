import { ListUsersService } from "./ListUsersService";
import { ListUsersController } from "./ListUsersController";
import { UsersPostgresRepository } from "../../repositories/implementations/UsersPostgresRepository";

const usersRepository = new UsersPostgresRepository();
const listUsersService = new ListUsersService(usersRepository);
const listUsersController = new ListUsersController(listUsersService);

export const listUsers = listUsersController.handle.bind(listUsersController);
