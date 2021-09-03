import { Injectable } from '@angular/core';
import { CommandDetail } from 'src/app/Models/Caddie/command-detail';
import { ProductDetailsForCommand } from 'src/app/Models/Caddie/product-details-for-command';
import { Adress } from 'src/app/Models/People/adress';

@Injectable({
  providedIn: 'root'
})
export class CommandMapperService {

  constructor() { }

  jsonToDetailsCommand(dt: any): CommandDetail{
    let cmdProduct: ProductDetailsForCommand[] = [];

    for (let i = 0; i < dt["commandProduct"].length; i++){
      cmdProduct.push(new ProductDetailsForCommand(
        dt["productName"],
        dt["ProductPrice"],
        dt["quantity"]
      ))
    };
    return new CommandDetail(
      dt["dateOfCommand"],
      new Adress(dt["adress"]["id"], dt["adress"]["street"], dt["adress"]["number"], dt["adress"]["postalCode"], dt["adress"]["city"], dt["adress"]["district"]),
      dt["firstName"],
      dt["lastName"],
      dt["emailAdress"],
      cmdProduct
    )
    
  };
}
