import { Adress } from "./adress";
import { Role } from "./role";

export class Customer {
    id: number;
    companyName: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAdress: string;
    password: string;
    adresses: Adress[];
    role: Role;
    

  constructor(
    id: number, 
    companyName: string, 
    firstName: string, 
    lastName: string, 
    phoneNumber: string, 
    emailAdress: string, 
    password: string, 
    adresses: Adress[], 
    role: Role
) {
    this.id = id
    this.companyName = companyName
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.emailAdress = emailAdress
    this.password = password
    this.adresses = adresses
    this.role = role
  }


}
