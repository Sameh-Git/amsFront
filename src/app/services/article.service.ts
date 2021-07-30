import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  article: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }

  listArticles() {

    return this.Http.get(environment.urlArticles + '/list');
  }

  createArticle(article) {

    return this.Http.post(environment.urlArticles + '/add', article);
  }

  deleteArticle(myObj: any) {

    return this.Http.delete(environment.urlArticles + '/' + myObj['id'])
  }


  updateArticle(myObj, id) {
    return this.Http.put(environment.urlArticles + '/' + id, myObj);
  }

  getArticle(id: any) {
    return this.Http.get(environment.urlArticles + '/' + id)
  }
}
