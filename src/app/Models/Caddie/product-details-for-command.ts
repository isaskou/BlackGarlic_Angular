export class ProductDetailsForCommand {
    productName: string;
    productPrice: number;
    quantity: number;


  constructor(productName: string, productPrice: number, quantity: number) {
    this.productName = productName
    this.productPrice = productPrice
    this.quantity = quantity
  }

}
