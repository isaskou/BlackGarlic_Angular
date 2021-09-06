import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInfo } from 'src/app/Models/People/log-info';
import { RegisterCustomer } from 'src/app/Models/People/register-customer';
import { CustomerService } from 'src/app/Services/People/customer.service';
import { LoginService } from 'src/app/Services/People/login.service';
import { PasswordValidatorMaxLength, PasswordValidatorMinLength } from 'src/app/Services/People/password.service';
import { SessionService } from 'src/app/Services/Tools/session.service';
import jwt_decode from "../../../../../node_modules/jwt-decode";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // loginForm: FormGroup;
  // registerForm: FormGroup;
  // decrypted_token: any;
  // emailExist: boolean;
  // noUserFound: boolean;

  //demo Geoffroy
  // errorMessage: string;

  constructor(
    // private _formBuilder: FormBuilder,
    // private _router: Router,
    // private _customerService: CustomerService,
    // private _sessionService: SessionService,
    // private _loginService:LoginService
  ) { }

  ngOnInit(): void {
    // if (this._sessionService.recoverCustomerId() != null) {
    //   this._router.navigateByUrl("/shop");
    // }

    // this.loginForm = this._formBuilder.group({
    //   emailLog: this._formBuilder.control('',[Validators.required, Validators.email,Validators.minLength(3)]),
    //   passwordLog: this._formBuilder.control('',[Validators.required,Validators.minLength(3)])
    // });

    // this.registerForm = this._formBuilder.group({
    //   emailRegister: this._formBuilder.control('',[Validators.required, Validators.email,Validators.minLength(3)]),
    //   passwordRegister: this._formBuilder.control('',[Validators.required, PasswordValidatorMaxLength, PasswordValidatorMinLength]),
    //   confPwdRegister: this._formBuilder.control('',[Validators.required, PasswordValidatorMaxLength, PasswordValidatorMinLength])
    // });
  }

  // OnLoginSubmit(form: NgForm): void{
  //   // this.loginForm.markAllAsTouched();
  //   if (this.loginForm.valid) {
  //     const credentials = {
  //       'email': form["emailLog"],
  //       'password':form["passwordLog"]
  //     }
  //     this._loginService.logCustomer(credentials).subscribe(response => {
  //       this.EncodingTokenInSession(response);
  //     },
  //       error => {
  //         this.noUserFound = true;
  //       }
  //     );
  //   }
  // }

  //demo Geoffroy
//   OnLoginSubmit() {
//     const email = this.loginForm.get('email').value;
//     const password = this.loginForm.get('password').value;
//     let isAuth;
//     this._loginService.signIn(email, password).subscribe(
//       data => {
//         this._router.navigate(["/home"]);
//       },
//       error => {
//         this.errorMessage = "Mot de passe ou Login erroné";
//       }
      
//     )

//   }

//   OnRegisterSubmit(form: NgForm): void{
//     this.registerForm.markAllAsTouched();
//     console.log(form);

//     if (this.registerForm.valid) {
//       this._customerService.RegisterCustomer(
//         new RegisterCustomer(
//           form['emailRegister'], form['passwordRegister']
//         )
//       ).subscribe(dt => {
//         const credentials = {
//           'email': form["emailRegister"],
//           'password':form["passwordRegister"]
//         }
//         this._loginService.logCustomer(credentials).subscribe(response => {
//           this.EncodingTokenInSession(response);
//         });
//       }, error => {
//         if (error["error"]["text"] == "L'adresse mail existe déjà") {
//           this.emailExist = !this.emailExistError();
//         }
//       });
      
//     }
//   }

//   emailExistError() : boolean {
//     return this.emailExist;
//   }

//   EncodingTokenInSession(response: any) : void{
//     const token = (<any>response).token;
//     sessionStorage.setItem("jwt", token);

//     this.decrypted_token = jwt_decode(token);
//     this._sessionService.connectedUser = new LogInfo(
//       this.decrypted_token["UserId"],
//       this.decrypted_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
//       this.decrypted_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
//       this.decrypted_token["exp"]
//       );           
//     sessionStorage.setItem("userInfo",JSON.stringify(this._sessionService.connectedUser));
//     this._router.navigate(["/shop"]);
//   }

}
