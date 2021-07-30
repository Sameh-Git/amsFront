import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public susername = sessionStorage.getItem("username");;
  public sfname = sessionStorage.getItem("name");
  public slname = sessionStorage.getItem("lname");
  public srole = sessionStorage.getItem("role");
  public id=sessionStorage.getItem("id");
  public picture=sessionStorage.getItem("picture");
  



  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username +':'+ password) });
    return this.httpClient.post(
      environment.urlAuth,
      {"username":username,
      "password":password
       }
      ).pipe
      (
        map(
          userData => {

            sessionStorage.setItem('username', username);
            sessionStorage.setItem('name', userData["fname"]);
            sessionStorage.setItem('lname', userData["lname"]);
            sessionStorage.setItem('role', userData["temp"]);
            sessionStorage.setItem('id', userData["id"]);
            sessionStorage.setItem('picture', userData["picture"]);
            //sessionStorage.setItem('token', userData["jwttoken"]);

            this.susername =sessionStorage.getItem("username");
            this.sfname =sessionStorage.getItem("name");
            this.slname =sessionStorage.getItem("lname");
            this.srole =sessionStorage.getItem("role");
            this.id=sessionStorage.getItem("id");
            
            this.picture=sessionStorage.getItem("picture");
            //NavbarComponent.user = sessionStorage.getItem('username');
            //sessionStorage.setItem('password', password);
            //console.log(username + " " + password);
            console.log(userData);
             //Basic auth
            ///let authString = 'Basic ' + btoa(username + ':' + password);

            //JWT auth
            let BearerToken = 'Bearer ' + userData["jwttoken"];
            sessionStorage.setItem('bearerToken', BearerToken)
            return userData;
          }
        )
      );
    /*
    if (username === "amine" && password === "1234") {  //hardcoded(normalement on va voir comment les récupéerer depuis le backend)
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)   // true or false
  }
  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('lname');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('basicauth');
  }
}