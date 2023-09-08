import { UpdateProductService } from "./UpdateProductService";
import { UpdateProductController } from "./UpdateProductController";
import { ProductsPostgresRepository } from "../../repositories/implementations/ProductsPostgresRepository";

const productsRepository = new ProductsPostgresRepository();
const updateProductService = new UpdateProductService(productsRepository);
const updateProductController = new UpdateProductController(updateProductService);

export const updateProduct = updateProductController.handle.bind(updateProductController);
