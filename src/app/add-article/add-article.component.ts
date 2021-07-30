import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  selectedFile: File;
  article: any;
  id:any;
  providers:any;

  constructor(private service: ArticleService, private router : Router,private servicep: ProviderService) { }
  ngOnInit(): void {

    
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

  createArticle(myform) {


this.id=myform.value.articleProvider;

    const article = new FormData();
 
    article.append('label', myform.value.articleLabel);
    article.append('price', myform.value.articlePrice);
    article.append('provider', myform.value.articleProvider);
    article.append('imageFile', this.selectedFile, this.selectedFile.name);
    article.append('imageName',this.selectedFile.name);

    this.service.createArticle(article).subscribe(
      (response) =>{
        console.log(response);
    this.router.navigate(['listArticle']);
    }
    );
   
    }
    
}
