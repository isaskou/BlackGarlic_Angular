import { Adress } from "src/app/Models/People/adress";
import { Role } from "src/app/Models/People/role";

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    adresses: Adress[];
    role: Role;
}
