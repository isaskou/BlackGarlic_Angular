export class Adress {
    id: number;
    street: string;
    number: string;
    postalCode: number;
    city: string;
    district: string;

  constructor(
    id: number, 
    street: string, 
    number: string, 
    postalCode: number, 
    city: string, 
    district: string
) {
    this.id = id
    this.street = street
    this.number = number
    this.postalCode = postalCode
    this.city = city
    this.district = district
  }

}
