import { CategoryProduct } from "./Products/category-product";

export class ProductToInsert {
    productName: string;
    description: string;
    utilisation: string;
    ingredients: string;
    unitPrice: number;
    category: CategoryProduct;
    pictureUrl: string;


  constructor(
    productName: string, 
    description: string, 
    utilisation: string, 
    ingredients: string, 
    unitPrice: number, 
    category: CategoryProduct, 
    pictureUrl: string
) {
    this.productName = productName
    this.description = description
    this.utilisation = utilisation
    this.ingredients = ingredients
    this.unitPrice = unitPrice
    this.category = category
    this.pictureUrl = pictureUrl
  }


    
}
