import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adress } from 'src/app/Models/People/adress';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdressService {
  private url = environment.apiUrl + "Adress/";

  constructor(
    private _http:HttpClient
  ) { }

  getAll(): Observable<Adress[]>{
    return this._http.get<Adress[]>(this.url);
  }

  getAdressesByCustomerId(id: number): Observable<Adress[]>{
    return this._http.get<Adress[]>(this.url + id);
  }

  insertAdressForCustomer(adress: Adress, customerId: number): Observable<any>{
    return this._http.post<any>(this.url + customerId, adress);
  }

  updateAdress(adress: Adress): Observable<any>{
    return this._http.put<any>(this.url, adress);
  }

  deleteAdress(id:number): Observable<any>{
    return this._http.delete(this.url + id);
  }
}
