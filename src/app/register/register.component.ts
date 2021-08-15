import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router, private fb: FormBuilder) {
    if (this._auth.loggedIn()) {
      this._router.navigate(['/events'])
    }
  }
  registrationForm: FormGroup;
  submitted: boolean;


  ngOnInit(): void {
    // this.createFormBuilder();
  }
  registerUser() {
    console.log(this.registrationForm.value);

    // ////
    // // const userCredentials = {
    // //   email: this.registrationForm.value.email,
    // //   password: this.registrationForm.value.password

    // }
    // this.submitted = true;
    // if (this.registrationForm.invalid) {
    //   return;
    // }
    // this._auth.registerUser(this.registrationForm.value).subscribe(res => {
    //   console.log(res);

    //   this._auth.loginUser(userCredentials).subscribe(res => {
    //     console.log(res);

    //   })
  //   }, error => {
  //     console.log(error);

  //   })
  // }

  // createFormBuilder() {
  //   this.registrationForm = this.fb.group({
      // authCredentialDto: new FormGroup({
      //   email: new FormControl(null, Validators.required),
      //   password: new FormControl(null, Validators.required)
      // }),
      // createProfileDto: new FormGroup({
  //       email: new FormControl(null, Validators.required),
  //       firstname: new FormControl(null, Validators.required),
  //       lastname: new FormControl(null, Validators.required),
  //       gender: new FormControl(null, Validators.required),
  //       age: new FormControl(null, Validators.required),
  //       country: new FormControl(null, Validators.required),
  //       city: new FormControl(null, Validators.required),
  //       address: new FormControl(null, Validators.required),
  //     })
  //   // })
  // }
  // get f() { return this.registrationForm.controls }
  // get email() { return this.registrationForm.get('email'); }


}

}

