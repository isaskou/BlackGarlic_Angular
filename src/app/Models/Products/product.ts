export class Product {
    id!: number;
    name!: string;
    description!: string;
    utilisation!: string;
    ingredients!: string;
    isDisabled!: boolean;
    unitPrice!: number;
    categoryId!: number;
    pictureUrl!: string;
    
    constructor(id: number, name: string, description: string, utilisation: string, ingredients: string, isDisabled: boolean, unitPrice: number, categoryId: number, pictureUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.utilisation = utilisation;
        this.ingredients = ingredients;
        this.isDisabled = isDisabled;
        this.unitPrice = unitPrice;
        this.categoryId = categoryId;
        this.pictureUrl = pictureUrl;
        
}

    
}
