import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/Products/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.apiUrl+"Product/";


  constructor(
    private _httpClient: HttpClient) { }

  GetAll(): Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.url);
  }

  GetById(id: number): Observable<Product>{
    return this._httpClient.get<Product>(this.url + id);
  }

  Insert(p: Product): Observable<number>{
    return this._httpClient.post<number>(this.url, p);
  }
  
  Update(p: Product): Observable<Product>{
    return this._httpClient.put<Product>(this.url + p.id, p);
  }

  Delete(id:number): Observable<Product>{
    return this._httpClient.delete<Product>(this.url+id)
  }

  GetByCategoryId(id: number): Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.url+"api/Product/category/"+id)
  }


}
