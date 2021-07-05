
import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  constructor(private service: ProviderService, private router: Router) { }
  providers: any;

  ngOnInit(){
    this.service.listProviders().subscribe(
      response => {
      this.providers = response;
      }
      );

     

      
  }
  
  deleteProvider(myObj: any) {
    
    this.service.deleteProvider(myObj).subscribe(response => {
      console.log(response);
      this.refreshListProviders();
    })
  }
  refreshListProviders() {
    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }

  updateProvider(myObj:any) {
    this.router.navigate(['updateProvider' + '/' + myObj['id']]);
    }
 


}



