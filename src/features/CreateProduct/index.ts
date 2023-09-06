import { CreateProductService } from "./CreateProductService";
import { CreateProductController } from "./CreateProductController";
import { ProductsPostgresRepository } from "../../repositories/implementations/ProductsPostgresRepository";

const productsRepository = new ProductsPostgresRepository();
const createProductService = new CreateProductService(productsRepository);
const createProductController = new CreateProductController(createProductService);

export { createProductController };
