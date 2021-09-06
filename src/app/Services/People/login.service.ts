import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscribable, SubscribableOrPromise } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/Models/People/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.apiUrl + "Login/";

  private _currentUserSubject: BehaviorSubject<Customer>;
  public currentUser: Observable<Customer>;
  

  constructor(
    private _http:HttpClient
  ) { }

  logCustomer(credentials: any): Subscribable<any>{
    return this._http.post<any>(this.url, credentials);
  }

  signIn(email: string, password: string) {
    return this._http.post<any>(this.url, { email, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this._currentUserSubject.next(user);
        return user;

      }));
  }
}
