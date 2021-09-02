import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/Caddie/cart';
import { CommandService } from 'src/app/Services/Caddie/command.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cart: Cart[]=[];
  total: number;
  adressesSelected: boolean = false;
  adressSelectedId: number = 0;

  constructor(
    private _router: Router,
    //TODO
    // private _sessionService: SessionStorageService,
    private _commandService: CommandService,
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < this.cart.length; i++){
      this.total = parseInt(this.total.toString()) + (parseInt(this.cart[i].unitPrice.toString()) * this.cart[i].quantity);
    }
  }

  recoverAdress(a: any): void{
    if (a != undefined) {
      this.adressesSelected = true;
      this.adressSelectedId = a;
    }
  }

  removeFromCart(productId: number) {
    // TODO
    
  }

}
