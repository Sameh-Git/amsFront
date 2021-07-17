import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  urlProviders = 'http://127.0.0.1:8080/providers';
  provider: any;

  constructor(private Http: HttpClient) { }
  listProviders() {
    return this.Http.get(environment.urlProviders + '/list');
    }
    createProvider(myform: { value: { providerName: any; providerEmail: any; providerAdress: any; }; }) {
      this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
      }
      return this.Http.post(environment.urlProviders + '/add', this.provider);
      }

      deleteProvider(myObj: any) {
        return this.Http.delete(environment.urlProviders + '/' + myObj['id'])
      }

     
      updateProvider(myObj : any) {
        return this.Http.put(environment.urlProviders + '/' + myObj['id'], myObj);
        }

        getProvider(id : any) {
          return this.Http.get(environment.urlProviders + '/' + id)
          }
}
