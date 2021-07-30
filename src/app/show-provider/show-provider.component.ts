import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-show-provider',
  templateUrl: './show-provider.component.html',
  styleUrls: ['./show-provider.component.css']
})
export class ShowProviderComponent implements OnInit {
articles;
provider:any;
id;
name: any;
  email: any;
  adress: any;
  nomImage;
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this.provider= this.service.getProvider(this.id).subscribe(
          response => {
            console.log(response);
            this.name = response["name"];
            this.email = response["email"];
            this.adress = response["address"];
            this.nomImage = response["logo"];


          }
        );

       

      }
    );

    this.service.getArticles(this.id).subscribe(
      
      response => {
        this.articles = response;
      }
      
    );
    if(this.articles.size()==0)this.articles=null;

  }



}
