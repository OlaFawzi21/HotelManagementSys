import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { AnonymousNavbarComponent } from './components/anonymous-navbar/anonymous-navbar.component';


@NgModule({
  declarations: [
    LandingComponent,
    UserNavbarComponent,
    AnonymousNavbarComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
