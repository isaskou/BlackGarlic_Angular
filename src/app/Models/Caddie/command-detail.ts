import { Adress } from "../People/adress";
import { ProductDetailsForCommand } from "./product-details-for-command";

export class CommandDetail {
    dateOfCommand: Date;
    adress: Adress;
    firstname: string;
    lastname: string;
    emailAdress: string;
    productDetails: ProductDetailsForCommand[];


  constructor(
    dateOfCommand: Date, 
    adress: Adress, 
    firstname: string, 
    lastname: string, 
    emailAdress: string, 
    productDetails: ProductDetailsForCommand[]
) {
    this.dateOfCommand = dateOfCommand
    this.adress = adress
    this.firstname = firstname
    this.lastname = lastname
    this.emailAdress = emailAdress
    this.productDetails = productDetails
  }


}
