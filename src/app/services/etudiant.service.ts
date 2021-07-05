import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  names: string []=["Amine","Rihab","Wissal","Sameh"];
  listCandidats(){
    return this.names;
  }

  listUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  
  listProviders(){
    return this.http.get("http://127.0.0.1:8080/providers/list");
  }
  saveProvider(provider:any){
    return this.http.post("http://127.0.0.1:8080/providers/add",provider);
  }
}
