type CategoryProps = {
    _id?: string;
    title: string;
    color: string;
};

export class Category {
    public _id?: string;
    public title: string;
    public color: string;

    constructor({ _id, title, color }: CategoryProps) {
        this._id = _id;
        this.title = title;
        this.color = color.toUpperCase();
    }

    // constructor({ id, title, color }: {id?: string, color: string, title: string}) {
    //     this.id = id;
    //     this.title = title;
    //     this.color = color;
    // }
}