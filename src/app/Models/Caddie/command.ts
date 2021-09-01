import { CommandProduct } from "./command-product";

export class Command {

    id: number;
    CustomerId: number;
    AdressId: number;
    CommandProduct: CommandProduct[];

  constructor(
    id: number, 
    CustomerId: number, 
    AdressId: number, 
    CommandProduct: CommandProduct[]
) {
    this.id = id
    this.CustomerId = CustomerId
    this.AdressId = AdressId
    this.CommandProduct = CommandProduct
  }

}
