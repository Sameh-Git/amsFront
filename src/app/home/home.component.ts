import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../services/etudiant.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // urlImage :string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
 image:String="https://loga-engineering.com/wp-content/uploads/2019/10/angular-logo.png";
 contenu : string[] =["String interpolation :{{}}", "Property Binding : []", "Event Binding : ()","Two Way Data Binding [()]","Directives : *ngFor, *ngIf","Pipes : |"];

 
 constructor(private service : EtudiantService) {
    console.log("Constructor!!");
   
   }
   etudiants : string[] = [];
   users:any;
   providers:any;
  ngOnInit(): void {
    console.log("ngOnInit");
    //console.log(this.service.listCandidats());
    this.etudiants = this.service.listCandidats();
    this.service.listUsers().subscribe(
      data =>{
       // console.log(data);
       this.users = data;
      }
    );
    this.service.listProviders().subscribe(
      res =>{
        //console.log(res);
        this.providers = res;}
    );
  }

  info(){
    alert("Bien à Angular");
  }

}
