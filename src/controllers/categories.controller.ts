import { Request, Response } from "express";

import { CategoriesService } from "../services/categories.services";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CreateCategoryDTO } from "../dtos/categories.dtos";

export class CategoriesController {
    async create(
        req: Request<unknown, unknown, CreateCategoryDTO>, 
        res: Response,
    ) {
        const { title, color } = req.body;
        const repository = new CategoriesRepository(CategoryModel);
            const service = new CategoriesService(repository);

            const result = await service.create({ title, color });
            
            return res.status(201).json(result);
    }
}

// export class CategoriesController {

//     async create(req: Request, res: Response): Promise<Response> {
//             const service = new CategoriesService();

//             const result = await service.create(req.body.title, req.body.color);
            
//             return res.status(201).json(result);
// }
// }

