import { CategoryProduct } from "src/app/Models/Products/category-product";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    utilisation: string;
    ingredients: string;
    isDisabled: boolean;
    unitPrice: number;
    categoryId: number;
    Category: CategoryProduct;
    pictureUrl: string;

}
