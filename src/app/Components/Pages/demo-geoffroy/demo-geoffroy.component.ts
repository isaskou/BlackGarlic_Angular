import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/People/login.service';

@Component({
  selector: 'app-demo-geoffroy',
  templateUrl: './demo-geoffroy.component.html',
  styleUrls: ['./demo-geoffroy.component.css']
})
export class DemoGeoffroyComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._builder.group({
      email: ["", [Validators.required, Validators.email]],
      password:["", [Validators.required]]
    })
  }

  onSubmit() {
    const email = this.loginForm.get('email').value;
    
    const password = this.loginForm.get('passord').value;
    // let isAuth;
    this._loginService.signIn(email, password).subscribe(
      data => {
        this._router.navigate(['home']);

      },
      error => {
        this.errorMessage = "Mot de passe ou Login erroné";
      }
    );
  }

}
