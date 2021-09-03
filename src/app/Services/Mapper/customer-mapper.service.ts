import { Injectable } from '@angular/core';
import { Adress } from 'src/app/Models/People/adress';
import { Customer } from 'src/app/Models/People/customer';
import { Role } from 'src/app/Models/People/role';

@Injectable({
  providedIn: 'root'
})
export class CustomerMapperService {
  tmpAdresses: any = [];

  constructor() { }

  public jsonToClient(dt: any): Customer{
    let adresses: Adress[] = [];
    this.tmpAdresses = dt["adresses"];

    for (let i = 0; i < this.tmpAdresses.length; i++){
      adresses.push(new Adress(
        this.tmpAdresses[i]["id"],
        this.tmpAdresses[i]["street"],
        this.tmpAdresses[i]["number"],
        this.tmpAdresses[i]["postalCode"],
        this.tmpAdresses[i]["city"],
        this.tmpAdresses[i]["district"]
      ));
    }
    return new Customer(
      dt["id"],
      dt["companyName"],
      dt["firdtName"],
      dt["lastName"],
      dt["phoneNumber"],
      dt["emailAdress"],
      dt["password"],
      adresses,
      new Role(dt["role"]["id"], dt["role"]["roleName"])
    );
  }
}
