import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Products/product';
import { ProductService } from 'src/app/Services/Products/product.service';

@Component({
  selector: 'app-d-product-detail',
  templateUrl: './d-product-detail.component.html',
  styleUrls: ['./d-product-detail.component.css']
})
export class DProductDetailComponent implements OnInit {

  currentProduct: Product;
  
  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder:FormBuilder
  ) {
   }
  


  ngOnInit(): void {
    this._productService.GetById(this._activatedRoute.snapshot.params["id"])
      .subscribe((p: Product) => this.currentProduct = p);
    }

}
