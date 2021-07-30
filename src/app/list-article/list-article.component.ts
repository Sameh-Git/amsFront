import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../services/article.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: any;
  constructor(public loginService: AuthenticationService, private service: ArticleService, private router: Router) { }

  ngOnInit() {



    this.refreshListArticles();
   
  }


  deleteArticle(myObj) {
    //console.log(this.provider);
    this.service.deleteArticle(myObj).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    })
  }
  refreshListArticles() {

    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
    if(this.articles.size()==0){
    this.articles=null;}
  }
  updateArticle(myObj) {
    this.router.navigate(['updateArticle' + '/' + myObj['id']]);
  }

}
