import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // urlImage :string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
 image:String="https://loga-engineering.com/wp-content/uploads/2019/10/angular-logo.png";
 contenu : string[] =["String interpolation :{{}}", "Property Binding : []", "Event Binding : ()","Two Way Data Binding [()]","Directives : *ngFor, *ngIf","Pipes : |"];

 
 constructor() {
    console.log("Constructor!!")
   }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  info(){
    alert("Bien à Angular");
  }

}
