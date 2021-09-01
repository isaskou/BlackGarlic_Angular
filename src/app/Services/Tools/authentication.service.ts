import { Injectable } from '@angular/core';
import { CanActivate, Router,} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(
    private _router: Router,
    private _jwtHelper: JwtHelperService
  ) { }

  canActivate(){
    const token = sessionStorage.getItem("jwt"); 
    if(token && !this._jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this._router.navigate(["login"]);
    return false;
  }
  
}
