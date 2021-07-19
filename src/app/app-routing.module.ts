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


const routes: Routes = [
  
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
    { path: "listProviders", component: ListProviderComponent , canActivate: [AuthGaurdService]},
    { path: "addProvider", component: AddProviderComponent, canActivate: [AuthGaurdService] },
    { path: "updateProvider/:id", component: UpdateProviderComponent, canActivate: [AuthGaurdService] },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'logout', component: LogoutComponent , canActivate: [AuthGaurdService]},
    {path:"contact", component:ContactComponent},
    {path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
