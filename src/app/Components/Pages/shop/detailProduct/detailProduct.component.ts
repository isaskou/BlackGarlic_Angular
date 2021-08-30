import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Products/product';
import { ProductService } from 'src/app/Services/Products/product.service';

@Component({
  selector: 'app-detailProduct',
  templateUrl: './detailProduct.component.html',
  styleUrls: ['./detailProduct.component.css']
})
export class DetailProductComponent implements OnInit {
  currentProduct: Product ;

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void{
    this._productService.GetById(this._activatedRoute.snapshot.params["id"])
      .subscribe((product: Product) => this.currentProduct = product);
  }

}
