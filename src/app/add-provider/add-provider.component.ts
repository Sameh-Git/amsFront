import { Component, OnInit } from '@angular/core';

import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {


  provider: any;
  
  selectedFile: File;
  constructor(private service: ProviderService, private router : Router) { }
  ngOnInit(): void {}
  
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  createProvider(myform) {




    const provider = new FormData();
    provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    provider.append('imageName',this.selectedFile.name);
    provider.append('name', myform.value.providerName);
    provider.append('email', myform.value.providerEmail);
    provider.append('address', myform.value.providerAdress);

    this.service.createProvider(provider).subscribe(
      (response) =>{
        console.log(response);
    this.router.navigate(['listProviders']);
    }
    );
   
    }
    

}
