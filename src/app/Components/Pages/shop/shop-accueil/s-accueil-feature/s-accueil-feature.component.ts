import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Products/product';
import { ProductService } from 'src/app/Services/Products/product.service';

@Component({
  selector: 'app-s-accueil-feature',
  templateUrl: './s-accueil-feature.component.html',
  styleUrls: ['./s-accueil-feature.component.css']
})
export class SAccueilFeatureComponent implements OnInit {
  listProduct: Product[] = [];

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._productService.GetAll();
  }

}
