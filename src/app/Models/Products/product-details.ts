import { CategoryProduct } from "./category-product";

export class ProductDetails {
    id: number;
    productName: string;
    unitPrice: number;
    description: string;
    category: CategoryProduct;
    pictureUrl: string;


  constructor(
    id: number, 
    productName: string, 
    unitPrice: number, 
    description: string, 
    category: CategoryProduct, 
    pictureUrl: string
) {
    this.id = id
    this.productName = productName
    this.unitPrice = unitPrice
    this.description = description
    this.category = category
    this.pictureUrl = pictureUrl
  }

}
