import { Injectable } from '@angular/core';
import { Cart } from 'src/app/Models/Caddie/cart';
import { LogInfo } from 'src/app/Models/People/log-info';
import jwt_decode from "../../../../node_modules/jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  decrypted_token: any;

  constructor() { }

  recoverCustomerId(): number {
    if (sessionStorage.getItem("userInfo") != null) {
      let userId;
      userId = JSON.parse(sessionStorage.getItem("userInfo"))
      return userId["userId"];
    }
    return null;
  }

  recoverRoleUser(): string {
    if (sessionStorage.getItem("userInfo") != null) {
      let role;
      role = JSON.parse(sessionStorage.getItem("userInfo"))
      return role["role"];
    }
    return null;
  }

  private _connectedUser: LogInfo;

  get connectedUser(): LogInfo {
    return this._connectedUser;
  }

  set connectedUser(value: LogInfo) {
    this._connectedUser = value;
  }

  UpdateSessionInformation(response: any) {
    const token = (<any>response).token;
    sessionStorage.setItem("jwt", token);
    this.decrypted_token = jwt_decode(token);
    let dt = new LogInfo(
      this.decrypted_token["UserId"],
      this.decrypted_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      this.decrypted_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
      this.decrypted_token["exp"]
    );
    sessionStorage.setItem("userInfo", JSON.stringify(dt));
  }

  StoreTempCart(product: Cart): void{
    let tmpCart: Cart[] = JSON.parse(sessionStorage.getItem("tmpCart"));
    if (tmpCart == null || tmpCart == undefined) {
      tmpCart = [];
    }
    tmpCart.push(product);
    console.log(product.productName);
    sessionStorage.setItem("tmpcart", JSON.stringify(tmpCart));
  }

  emptyCart(): void {        
    sessionStorage.removeItem("tmpCart");
    sessionStorage.removeItem("cart");
  }
  
  removeTempCartData(product: Cart) : void{    
    let tmpCart : Cart[] = JSON.parse(sessionStorage.getItem("tmpCart"));
    tmpCart.splice(tmpCart.findIndex(x => x.id == product.id));
    sessionStorage.setItem("tmpCart", JSON.stringify(tmpCart));
  }

  getTempCart() : Cart[] {
    return JSON.parse(sessionStorage.getItem("tmpCart"));
  }

  getCartQt() : number {
    let jsonQt = sessionStorage.getItem("tmpCart");
    if(jsonQt == undefined || jsonQt == null) {
      return 0;
    }
    else {
      let qt = JSON.parse(sessionStorage.getItem("tmpCart"))?.length;
      if(qt != undefined || qt != null){
        return qt
      }
      return 0;
    }
  }




}

