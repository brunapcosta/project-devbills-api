import { Request, Response } from "express";

import { CategoriesService } from "../services/category.services";

export class CategoriesController {

    async create(req: Request, res: Response): Promise<Response> {
            const service = new CategoriesService();

            const result = await service.create(req.body.title, req.body.color);
            
            return res.status(201).json(result);
}
}

// export class CategoriesController {
//     public async create(_: Request, res: Response) {
//         try{
//             const service = new CategoriesService();

//             const result = await service.create();
            
//             return res.status(201).json(result)
//     } catch (error) {
//         // Passa o erro para o middleware de tratamento de erros
//   }
// }
// }
