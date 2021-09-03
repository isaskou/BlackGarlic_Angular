import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribable, SubscribableOrPromise } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.apiUrl + "Login/";

  constructor(
    private _http:HttpClient
  ) { }

  logCustomer(credentials: any): Subscribable<any>{
    return this._http.post<any>(this.url, credentials);
  }
}
