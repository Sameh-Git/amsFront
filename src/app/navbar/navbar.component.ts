import { Component, OnInit } from '@angular/core';

import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 /* static user: string =null;
  static userRole :any=null;
  static fname : any=null;
  static lname : any=null;*/

    /*user: string =null;
    userRole :any=null;
    fname : any=null;
    lname : any=null;*/
   
  constructor(public loginService: AuthenticationService,private service: UserService, private router: Router, private route: ActivatedRoute) {
    /*this.user = sessionStorage.getItem('username');
    this.userRole = sessionStorage.getItem('role');
    this.fname = sessionStorage.getItem('name');
    this.lname = sessionStorage.getItem('lname');*/
  }
user:any;
id:any;
picture:any;
name:any;
  ngOnInit(): void {
    this.service.getUser(this.loginService.id).subscribe(
      response => {
        this.user = response;  
        console.log(response);
        this.id = response["id"];
        this.picture = response["picture"];
       }
        );
      
    //this.id=this.loginService.id;
   
  
  }

  

  
   

}