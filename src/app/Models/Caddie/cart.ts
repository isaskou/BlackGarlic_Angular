export class Cart {
    id: number;
    productName: string;
    isDisabled: boolean;
    unitPrice: number;
    quantity: number;


  constructor(
    id: number, 
    productName: string, 
    isDisabled: boolean, 
    unitPrice: number, 
    quantity: number
) {
    this.id = id
    this.productName = productName
    this.isDisabled = isDisabled
    this.unitPrice = unitPrice
    this.quantity = quantity
  }

}
