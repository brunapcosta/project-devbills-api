// type CategoryProps = {
//     id?: string;
//     title: string;
//     color: string;
// }

export class Category {
    public id?: string;
    public title: string;
    public color: string;

    constructor({ id, title, color }: {id?: string, color: string, title: string}) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}

// const category = new Category({
//     title: 'Hello',
//     color: '#ff33bb',
// });