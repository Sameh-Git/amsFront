import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
users:any;
  constructor(public loginService: AuthenticationService, private service: UserService, private router: Router) { }

  ngOnInit(): void {
    
    this.refreshListUsers();
  }
  refreshListUsers() {

    this.service.listUsers().subscribe(
      response => {
        this.users = response;
      }
    );
  }

}
