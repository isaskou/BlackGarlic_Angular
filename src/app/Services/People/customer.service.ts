import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';
import { ICustomer } from 'src/app/Interfaces/People/icustomer';
import { Customer } from 'src/app/Models/People/customer';
import { RegisterCustomer } from 'src/app/Models/People/register-customer';
import { environment } from 'src/environments/environment';
import { SessionService } from '../Tools/session.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = environment.apiUrl + 'Customer/';

  constructor(
    private _http: HttpClient,
    private _sessionService : SessionService
  ) { }

  getCustomerById(id: number): Subscribable<ICustomer>{
    return this._http.get(this.url + id);
  }

  getCurrentCustomer(): Subscribable<ICustomer>{
    return this._http.get(this.url + this._sessionService.recoverCustomerId());
  }
  UpdateCustomerInformation(customer: Customer): Subscribable<any>{
    return this._http.put(this.url + this._sessionService.recoverCustomerId(), customer);
  }

  RegisterCustomer(customer: RegisterCustomer): Subscribable<RegisterCustomer>{
    return this._http.post(this.url, customer);
  }
}
