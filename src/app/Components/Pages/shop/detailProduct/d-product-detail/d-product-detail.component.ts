import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/Models/Caddie/cart';
import { Product } from 'src/app/Models/Products/product';
import { ProductDetails } from 'src/app/Models/Products/product-details';
import { ProductMapperService } from 'src/app/Services/Mapper/product-mapper.service';
import { ProductService } from 'src/app/Services/Products/product.service';
import { SessionService } from 'src/app/Services/Tools/session.service';

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
    private _formBuilder: FormBuilder,
    private _sessionService: SessionService,
    private _productMapper:ProductMapperService
    
  ) {
  }
  
  productId: string;
  productDetail: ProductDetails;
  qtForm: FormGroup;
  successAddesProductCart: boolean = false;
  


  ngOnInit(): void {
    this.qtForm = this._formBuilder.group({
      qt: this._formBuilder.control('1'),
    });

    this._productService.GetById(this._activatedRoute.snapshot.params["id"])
      .subscribe((p: Product) => this.currentProduct = p);
    
    this._activatedRoute.paramMap.subscribe(params => {
      this.productId=params.get("id")
    })

    this._productService.GetById(this.productId).subscribe(dt => {
      this.productDetail = this._productMapper.jsonToProductDetails(dt);
    })
  }

  AddToCart(product: Product, qt: NgForm) {
    this._sessionService.StoreTempCart(new Cart(
      product.id, product.name, product.isDisabled, product.unitPrice, qt["qt"]
    ));
  }

  UserIsConnected(): boolean{
    return this._sessionService.recoverRoleUser()=="Client"
  }
  
  

}
