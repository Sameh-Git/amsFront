import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //urlProviders = 'http://127.0.0.1:8080/providers';
  provider: any;
  username = sessionStorage.getItem('username');
password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }
  listProviders() {
    /*const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(environment.urlProviders + '/list', { headers });*/
    return this.Http.get(environment.urlProviders + '/list');
    }
    createProvider(myform: { value: { providerName: any; providerEmail: any; providerAdress: any; }; }) {
      //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
      this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
      }
      return this.Http.post(environment.urlProviders + '/add', this.provider );
      }

      deleteProvider(myObj: any) {
       // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.Http.delete(environment.urlProviders + '/' + myObj['id'])
      }

     
      updateProvider(myObj : any) {
        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.Http.put(environment.urlProviders + '/' + myObj['id'], myObj);
        }

        getProvider(id : any) {
        //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
          return this.Http.get(environment.urlProviders + '/' + id)
          }
}
