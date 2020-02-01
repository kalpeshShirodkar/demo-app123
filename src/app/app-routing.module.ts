import { RouterModule, Routes } from '@angular/router';
import { NgModule} from "@angular/core";
import { BlogComponent } from './blog/blog.component';
import { SigninComponent } from './auth/signin/signin/signin.component';
import { SignupComponent } from './auth/signup/signup/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './survey/create/create.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'blog', component: BlogComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup',component: SignupComponent },
    { path: 'create-survey' , component : CreateComponent}
  ];

  @NgModule({
      imports:[RouterModule.forRoot(appRoutes)],
      exports:[RouterModule]

  })
  export class AppRoutingModule{}