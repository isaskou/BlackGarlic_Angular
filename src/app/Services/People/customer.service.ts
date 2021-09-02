import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';
import { ICustomer } from 'src/app/Interfaces/People/icustomer';
import { Customer } from 'src/app/Models/People/customer';
import { RegisterCustomer } from 'src/app/Models/People/register-customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = environment.apiUrl + 'Customer/api/Customer/';

  constructor(
    private _http: HttpClient
    //TODO
    // private sessionService : SessionStorageService
  ) { }

  getCustomerById(id: number): Subscribable<ICustomer>{
    return this._http.get(this.url + id);
  }

  //TODO
  // getCurrentCustomer(): Subscribable<ICustomer>{
  //  
  // }
  // UpdateCustomerInformation(customer: Customer): Subscribable<any>{
    
  // }

  RegisterCustomer(customer: RegisterCustomer): Subscribable<RegisterCustomer>{
    return this._http.post(this.url, customer);
  }
}
