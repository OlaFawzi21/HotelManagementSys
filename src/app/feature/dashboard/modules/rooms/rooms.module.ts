import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule
  ]
})
export class RoomsModule { }
