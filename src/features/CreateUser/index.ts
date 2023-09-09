import { CreateUserService } from "./CreateUserService";
import { CreateUserController } from "./CreateUserController";
import { UsersPostgresRepository } from "../../repositories/implementations/UsersPostgresRepository";

const usersRepository = new UsersPostgresRepository();
const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

export const createUser = createUserController.handle.bind(createUserController);
