import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: any;
  userToUpdate: any;
  lastName: any;
  name: any;
  email: any;
  password: any;
  nomImage;
  selectedFile: File;
  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this.userToUpdate = this.service.getUser(this.id).subscribe(
          response => {
            console.log(response);
            this.lastName = response["lastName"];
            this.email = response["email"];
            
            this.name = response["name"];
            this.nomImage = response["picture"];

          }
        );  }
    ); }

    updateUser() {
      this.userToUpdate = {
        'name': this.name,
        'lastName': this.lastName,
        'email': this.email,
        'password': this.password,
        'id': this.id
      }
      const user = new FormData();
     
      user.append('name', this.name);
      user.append('lastName', this.lastName);
      user.append('email', this.email);
      user.append('password', this.password);
      user.append('id', this.id);
      
  
  
      
        this.service.updateUser(user,this.id).subscribe(
        response => {
          console.log(response);
          alert("Successful modification!")
         

        }
      );
  
    }

    public onFileChanged(event) {
      //Select File
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }


    
    updateUserPicture() {
      this.userToUpdate = {
        'name': this.name,
        'lastName': this.lastName,
        'email': this.email,
        'password': this.password,
        'id': this.id
      }
      const user = new FormData();
     
      
      user.append('imageFile', this.selectedFile, this.selectedFile.name);
    user.append('imageName',this.selectedFile.name);
  
  
      
        this.service.updateUserPicture(user,this.id).subscribe(
        response => {
          console.log(response);
          alert("Successful modification!")
          window.location.href ="updateUser/"+this.id;
        }
      );
  
    }

}
