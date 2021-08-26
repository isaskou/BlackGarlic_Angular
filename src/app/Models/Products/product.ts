import { IProduct } from "src/app/Interfaces/Products/iproduct";
import { CategoryProduct } from "./category-product";

export class Product implements IProduct {
    public id: number;
    public name: string;
    public description: string;
    public utilisation: string;
    public ingredients: string;
    public isDisabled: boolean;
    public unitPrice: number;
    public categoryId: number;
    public Category: CategoryProduct;
    public pictureUrl: string;

    constructor(id: number,
                name: string,
                description: string,
                utilisation: string,
                ingredients: string,
                isDisabled: boolean,
                unitPrice: number,
                categoryId: number,
                Category: CategoryProduct,
                pictureUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.utilisation = utilisation;
        this.ingredients = ingredients;
        this.isDisabled = isDisabled;
        this.unitPrice = unitPrice;
        this.categoryId = categoryId;
        this.Category = Category;
        this.pictureUrl = pictureUrl;
    }

}



