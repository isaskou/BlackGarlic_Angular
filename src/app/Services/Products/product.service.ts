import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/Products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'https://localhost:44322/api/Product';


  constructor(
    private _httpClient: HttpClient,
    private _router : Router
  ) { }

  GetAll(): Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.url);
  }

  GetById(id: number): Observable<Product>{
    return this._httpClient.get<Product>(this.url + '/' + id);
  }

  Insert(p: Product): Observable<number>{
    return this._httpClient.post<number>(this.url, p);
  }
  
  Update(p: Product): Observable<Product>{
    return this._httpClient.put<Product>(this.url + '/' + p.id, p);
  }

  Delete(id:number): Observable<Product>{
    return this._httpClient.delete<Product>(this.url+'/'+id)
  }


}
