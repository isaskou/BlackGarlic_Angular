import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/Caddie/cart';
import { Command } from 'src/app/Models/Caddie/command';
import { CommandProduct } from 'src/app/Models/Caddie/command-product';
import { CommandService } from 'src/app/Services/Caddie/command.service';
import { SessionService } from 'src/app/Services/Tools/session.service';

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
    private _sessionService: SessionService,
    private _commandService: CommandService,
  ) { }

  ngOnInit(): void {
    this.cart = this._sessionService.getTempCart();
    for (let i = 0; i < this.cart.length; i++){
      this.total = parseInt(this.total.toString()) + (parseInt(this.cart[i].unitPrice.toString()) * this.cart[i].quantity);
    }
  }

  payCart(): void{
    if (this.adressesSelected) {
      if (this._sessionService.recoverCustomerId() == undefined) {
        this._router.navigateByUrl("main/login");
      }
      else {
        let cmdProduct: CommandProduct[] = [];
        for (let i = 0; i < this.cart.length; i++){
          cmdProduct.push(new CommandProduct(this.cart[i].quantity, this.cart[i].id));
        }
        let cmd: Command;
        cmd = new Command(0, this._sessionService.recoverCustomerId(), this.adressSelectedId, cmdProduct);
        this._commandService.sendCommandToApi(cmd).subscribe(dt => {
          this._sessionService.emptyCart();
          this._router.navigateByUrl("/detailCommand/" + dt);
        });
      }
    }
  }

  recoverAdress(a: any): void{
    if (a != undefined) {
      this.adressesSelected = true;
      this.adressSelectedId = a;
    }
  }

  removeFromCart(productId: number) {
    let tmpCart: Cart[] = this._sessionService.getTempCart();
    let cartToRemove: Cart = tmpCart.find(x => x.id == productId);
    tmpCart.splice(tmpCart.findIndex(x => x.id == productId), 1);
    sessionStorage.setItem("tmpCart", JSON.stringify(tmpCart));
    this.cart.splice(tmpCart.findIndex(x => x.id == productId));
    this.total = parseInt(this.total.toString()) - (cartToRemove.unitPrice * cartToRemove.quantity);
    
  }

}
