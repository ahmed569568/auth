import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authCredentialDto: FormGroup;
  fieldTextType: boolean;
  submitted: boolean;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private fb: FormBuilder) {
    if (this._auth.loggedIn()) {
      this._router.navigate(['/events'])
    }
  }

  ngOnInit(): void {
    this.createFormBuilder();
  }
  loginUser() {
    this.submitted = true;
    if (this.authCredentialDto.invalid) {
      return;
    }
    this._auth.loginUser(this.authCredentialDto.value).subscribe(res => {
      localStorage.setItem('token', res.access_token);
      this._router.navigate(['/events'])
      console.log(res.access_token);
      console.log(this.authCredentialDto.value, 'vvvvvv');

    }, error => {
      // this.alertService.error(error);
      console.log(error);

    })
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  createFormBuilder() {
    this.authCredentialDto = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)

    })
  }
  get f() { return this.authCredentialDto.controls }

}
