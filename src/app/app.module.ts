import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { FepmComponent } from './fepm/fepm.component';
import { SolutionInfoComponent } from './solution-info/solution-info.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SupportComponent } from './support/support.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import {HashLocationStrategy,LocationStrategy} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    FepmComponent,
    SolutionInfoComponent,
    ProductInfoComponent,
    SupportComponent,
    AboutUsComponent,
    ContactUsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [{ useClass:HashLocationStrategy, provide:LocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
