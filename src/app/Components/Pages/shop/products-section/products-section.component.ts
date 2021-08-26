import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Products/product';
import { ProductService } from 'src/app/Services/Products/product.service';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
  listProduct: Product[] = [];

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._productService.GetAll().subscribe(
      (data: Product[]) => this.listProduct = data
    );
  }

  // private initProductList(): void{
  //   this._productService.GetAll().subscribe(
  //     (data:Product[])=> this.listProduct=data)
    
  

}
