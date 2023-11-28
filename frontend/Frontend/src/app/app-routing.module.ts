import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  {path:"" , redirectTo:"employee" , pathMatch: "full"},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'employee' , component:EmployeeComponent},
  {path:"**" , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
