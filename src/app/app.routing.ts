import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {FepmComponent} from './fepm/fepm.component';
import {SolutionInfoComponent} from './solution-info/solution-info.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SupportComponent} from './support/support.component';
import {CareersComponent} from './careers/careers.component';
const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'register',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    { path: 'aboutus',          component: AboutUsComponent },
    { path: 'contactus',          component: ContactUsComponent },
    { path: 'support',          component: SupportComponent },
    { path: 'careers',          component: CareersComponent },
    { path: 'fpemintro',          component: FepmComponent },
    { path: 'solutioninfo',          component: SolutionInfoComponent },
    { path: 'productinfo',          component: ProductInfoComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
