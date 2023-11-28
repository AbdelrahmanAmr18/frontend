import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../../Services/authentication-service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private _AuthService: AuthenticationServiceService,
    // private _HttpClient: HttpClient,
    private _Router: Router) { }

  isLoading: boolean = false;
  RegisterForm: FormGroup = new FormGroup({
    Username: new FormControl(null, [Validators.minLength(3), Validators.maxLength(25), Validators.required]),
    Email: new FormControl(null, [Validators.email, Validators.required]),
    Password: new FormControl(null, [Validators.required])
  })

  SubimtRegisterForm(RegisterForm: FormGroup) {
    if (RegisterForm.valid) {
      this._AuthService.signUp(RegisterForm.value).subscribe({
        next: (response) => {
          if (response.message === "User Registered successfully.") {
            this.isLoading = false;
            this._Router.navigate(['login']);
            alert("User Reigstered Successfully.");
          }
          else {
            alert("Registeration Error");
          }
        }
      })

    }
  }

  toRegisterAdmin(){
    this._Router.navigate(['registeradmin']);
  }

}
