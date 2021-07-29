import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }

  listUsers() {
   
    return this.Http.get(environment.urlUsers + '/list');
    }


    updateUser(myObj,id) {

      return this.Http.put(environment.urlUsers + '/' + id, myObj);
      }

      getUser(id : any) {
      
          return this.Http.get(environment.urlUsers + '/' + id)
          }

}
