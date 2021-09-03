import { Injectable } from '@angular/core';
import { CategoryProduct } from 'src/app/Models/Products/category-product';
import { Product } from 'src/app/Models/Products/product';
import { ProductDetails } from 'src/app/Models/Products/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductMapperService {

  constructor() { }

  public jsonToProduct(dt: any): Product[]{
    let products: Product[] = [];
    let category: CategoryProduct;

    for (let i = 0; i < dt.length; i++){
      products.push(new Product(
        dt["id"],
        dt["name"], dt["description"], dt["utilisation"], dt["ingredients"], dt["isDisabled"],
        dt["unitPrice"], dt["categoryId"], category, dt["pictureUrl"]
      ))
    }

    return products;
  };

  public jsonToProductDetails(dt: any): ProductDetails{
    let product: ProductDetails;
    let category: CategoryProduct;

    product = new ProductDetails(
      dt["id"],
      dt["productName"], dt["unitPrice"], dt["description"], category, dt["pictureUrl"]
    )
    return product;
  };
}
