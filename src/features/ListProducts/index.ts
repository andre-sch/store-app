import { ListProductsService } from "./ListProductsService";
import { ListProductsController } from "./ListProductsController";
import { ProductsPostgresRepository } from "../../repositories/implementations/ProductsPostgresRepository";

const productsRepository = new ProductsPostgresRepository();
const listProductsService = new ListProductsService(productsRepository);
const listProductsController = new ListProductsController(listProductsService);

export const listProducts = listProductsController.handle.bind(listProductsController);
