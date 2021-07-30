import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/authgaurd.service';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MapComponent } from './map/map.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListArticleComponent } from './list-article/list-article.component';


const routes: Routes = [
  
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
    { path: "listProviders", component: ListProviderComponent , canActivate: [AuthGaurdService]},
    
    { path: "listUsers", component: ListUserComponent , canActivate: [AuthGaurdService]},
    { path: "addProvider", component: AddProviderComponent, canActivate: [AuthGaurdService] },
    { path: "updateProvider/:id", component: UpdateProviderComponent, canActivate: [AuthGaurdService] },
    { path: "updateUser/:id", component: UpdateUserComponent, canActivate: [AuthGaurdService] },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'logout', component: LogoutComponent , canActivate: [AuthGaurdService]},
    {path:"contact", component:ContactComponent},
    { path: "map", component: MapComponent, canActivate: [AuthGaurdService] },
    {path:"home",component:HomeComponent},
    { path: "listArticle", component: ListArticleComponent , canActivate: [AuthGaurdService]},
    { path: "addArticle", component: AddArticleComponent, canActivate: [AuthGaurdService] },
    { path: "updateArticle/:id", component: UpdateArticleComponent, canActivate: [AuthGaurdService] },
  ];
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
