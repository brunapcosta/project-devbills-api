import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dtos/categories.dtos";
import { Category } from "../entities/category.entity";

export class CategoriesService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async create({ title, color }: CreateCategoryDTO): Promise<Category> {
        const category = new Category({
            title,
            color,
        });

        const createdCategory = await this.categoriesRepository.create(category);

        return createdCategory;
    }
}

// export class CategoriesService {
//     async create(title: string, color: string): Promise<Category> {
//         const category = new Category({
//             id: new Date().toISOString(),
//             title,
//             color
//         });

//         return category;
//     }
// }