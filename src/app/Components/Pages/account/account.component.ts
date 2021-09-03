import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/People/customer.service';
import { LoginService } from 'src/app/Services/People/login.service';
import { SessionService } from 'src/app/Services/Tools/session.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  decrypted_token: any;
  emailExist: boolean;
  noUserFound: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _customerService: CustomerService,
    private _sessionService: SessionService,
    private _loginService:LoginService
  ) { }

  ngOnInit(): void {
    if (this._sessionService.recoverCustomerId() != null) {
      this._router.navigateByUrl("/shop");
    }

    
  }

}
