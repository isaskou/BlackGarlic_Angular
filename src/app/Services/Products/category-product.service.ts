import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryProduct } from 'src/app/Models/Products/category-product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {
  private url = environment.apiUrl + "Category/";

  constructor(
    private _httpClient:HttpClient
  ) { }

  GetAll(): Observable<CategoryProduct[]>{
    return this._httpClient.get<CategoryProduct[]>(this.url);
  }

  GetById(id: number): Observable<CategoryProduct>{
    return this._httpClient.get<CategoryProduct>(this.url + id);
  } 
}
