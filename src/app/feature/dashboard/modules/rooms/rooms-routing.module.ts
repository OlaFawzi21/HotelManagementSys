import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: RoomsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
