import { Category } from "../entities/category.entity";

export class CategoriesService {
    async create(title: string, color: string): Promise<Category> {
        const category = new Category({
            id: new Date().toISOString(),
            title,
            color
        });

        return category;
    }
}

// import { Category } from "../entities/category.entity";

// export class CategoriesService {
//     async create(): Promise<Category> {
//         const category = new Category({
//             title: 'Exemple Category',
//             color: '#ff33bb',
//         });

//         return category;
//     }
// }