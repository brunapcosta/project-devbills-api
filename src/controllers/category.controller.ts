import { Request, Response } from "express";

import { CategoriesService } from "../services/category.services";

export class CategoriesController {
    create = async (req: Request, res: Response) => {
            const service = new CategoriesService();

            const result = await service.create();
            
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
