import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin/signin.component';
import { SignupComponent } from './auth/signup/signup/signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header/header.component';
import { FooterComponent } from './navigation/footer/footer/footer.component';
import { CreateComponent } from './survey/create/create.component';
import { ViewComponent } from './survey/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    ViewComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
