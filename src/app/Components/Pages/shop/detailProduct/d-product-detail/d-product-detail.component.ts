import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryProduct } from 'src/app/Models/Products/category-product';
import { Product } from 'src/app/Models/Products/product';
import { ProductDetail } from 'src/app/Models/Products/product-detail';
import { CategoryProductService } from 'src/app/Services/Products/category-product.service';
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
    private _activatedRoute : ActivatedRoute
  ) {
   }
  


  ngOnInit(): void {
    this._productService.GetById(this._activatedRoute.snapshot.params["id"])
      .subscribe((p: Product) => this.currentProduct = p);
    }

}
