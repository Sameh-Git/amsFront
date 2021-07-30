import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  id: any;
  providers:any;
  articleToUpdate: any;
  label: any;
  price: any;
  picture: any;
  provider: any;
  nomImage;
  selectedFile: File;
  constructor(private service: ArticleService, private router: Router, private route: ActivatedRoute ,private servicep: ProviderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this.articleToUpdate = this.service.getArticle(this.id).subscribe(
          response => {
            console.log(response);
            this.label = response["label"];
            this.price = response["price"];
            this.provider = response["provider"];
            this.nomImage = response["picture"];


          }
        );

      }
    );

    this.refreshListProviders();
  }
  refreshListProviders() {

    this.servicep.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }



  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  updateArticle() {
    this.articleToUpdate = {
      'label': this.label,
      'price': this.price,
     // 'provider': this.provider,
      'id': this.id
    }
    const article = new FormData();
    article.append('imageFile', this.selectedFile, this.selectedFile.name);
    article.append('imageName',this.selectedFile.name);
    article.append('label', this.label);
    article.append('price', this.price);
  // article.append('provider', this.provider);
    article.append('id', this.id);


    //this.service.updateProvider(this.providerToUpdate).subscribe(
      this.service.updateArticle(article,this.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listArticle']);
      }
    );

  }

}
