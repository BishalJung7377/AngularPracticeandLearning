import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './users/forms/forms.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'login' , 
    component: LoginComponent 
  },
  {
    path: 'signup',
     component:SignupComponent
  },
  {
    path: 'testlogin',
     component: FormsComponent
  },
  {
    path: '',
     component: HomeComponent
  },
  {
    path: '**',
    component:PagenotfoundComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[
  SignupComponent, LoginComponent,FormsComponent, HomeComponent, PagenotfoundComponent
]
