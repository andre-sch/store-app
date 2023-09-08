import { DeleteProductService } from "./DeleteProductService";
import { DeleteProductController } from "./DeleteProductController";
import { ProductsPostgresRepository } from "../../repositories/implementations/ProductsPostgresRepository";

const productsRepository = new ProductsPostgresRepository();
const deleteProductService = new DeleteProductService(productsRepository);
const deleteProductController = new DeleteProductController(deleteProductService);

export const deleteProduct = deleteProductController.handle.bind(deleteProductController);
