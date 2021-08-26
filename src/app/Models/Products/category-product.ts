import { ICategoryProduct } from "src/app/Interfaces/Products/icategory-product";

export class CategoryProduct implements ICategoryProduct {
    id: number;
    name: string;
    description: string;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
