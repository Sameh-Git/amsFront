import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../services/etudiant.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  providerName : String="Samsung";
  providerEmail: String="samsung@hotmail.com";


  constructor(private service : EtudiantService) { }
  ngOnInit(): void {
  }

  info(){
    alert(this.providerName + "-"+ this.providerEmail);
  }
  submit(myform:any){
    alert(myform.value.nomEtudiant + " "+myform.value.prenomEtudiant);
   }

   submitProvider(formprovider:any){
    let provider ={
      "name":formprovider.value.name,
      "email":formprovider.value.email,
      "address":formprovider.value.address,
    };

    this.service.saveProvider(provider).subscribe(
      data =>{
        console.log(data);
        alert("Ajout avec succees!");
      }
    );

  }
 }


