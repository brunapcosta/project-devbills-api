import { Router } from "express";
import { CategoriesController } from "../controllers/category.controller";

export const categoriesRoutes = Router();

const controller = new CategoriesController();

categoriesRoutes.post('/', controller.create);

// import { Router, Request as _, Response as res } from "express";
// import { CategoriesController } from "../controllers/category.controller";

// export const categoriesRoutes = Router();

// const controller = new CategoriesController();

// // categoriesRoutes.post('/', controller.create);

// categoriesRoutes.post('/', async (_, res) => {
//     return controller.create(_, res);
//   });
