import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
  
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
    { path: "listProviders", component: ListProviderComponent },
    { path: "addProvider", component: AddProviderComponent },
    { path: "updateProvider/:id", component: UpdateProviderComponent },
    {path:"contact", component:ContactComponent},
    {path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
