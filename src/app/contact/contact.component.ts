import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  providerName : String="Samsung";
  providerEmail: String="samsung@hotmail.com";

  constructor() { }

  ngOnInit(): void {
  }

  info(){
    alert(this.providerName + "-"+ this.providerEmail);
  }

}
