import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { AnonymousNavbarComponent } from './components/anonymous-navbar/anonymous-navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent,
    UserNavbarComponent,
    AnonymousNavbarComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
  SharedModule
  ]
})
export class LandingModule { }
