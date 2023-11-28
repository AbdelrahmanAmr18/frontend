import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    private httpClient: HttpClient,
    private Router: Router) { 
    // var userToken = localStorage.getItem("userToken");
    // if(userToken != null){
    //   this.setUserData(userToken);
    // }
  }
  
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };

  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  
  setUserData(token:string){
    //localStorage.setItem('userToken',token);
    //this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem('userToken'))));
  }

  signUp(newUser:object):Observable<any>{
    return this.httpClient.post("http://localhost:5125/api/Authentication/register" , newUser, this.httpHeader );
  }

  signIn(logedUser:object):Observable<any>{
    return this.httpClient.post("http://localhost:5125/api/Authentication/login"  , logedUser , this.httpHeader );
  }

  // signUpAsAdmin(logedUser:object):Observable<any>{
  //   return this.httpClient.post(environment.RegisterAdmin , logedUser , this.httpHeader );
  // }

  SignOut(){
    //localStorage.clear();
    this.userData.next(null);
    this.Router.navigate(["login"]);
    alert("You have been Logged out");
  }

}
