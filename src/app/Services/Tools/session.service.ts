import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  decrypted_token: any;

  constructor() { }

  recoverCustomerId(): number{
    if (sessionStorage.getItem("userInfo") != null) {
      let userId;
      userId = JSON.parse(sessionStorage.getItem("userInfo"))
      return userId["userId"];
    }
    return null;
  }

  recoverRoleUser(): string{
    if (sessionStorage.getItem("userInfo") != null) {
      let role;
      role = JSON.parse(sessionStorage.getItem("userInfo"))
      return role["role"];
    }
    return null;
  }
}
