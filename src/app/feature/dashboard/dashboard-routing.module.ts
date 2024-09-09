import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'rooms',
        loadChildren: () =>
          import('./modules/rooms/rooms.module').then((m) => m.RoomsModule),
      },
      {
        path: 'ads',
        loadChildren: () =>
          import('./modules/ads/ads.module').then((m) => m.AdsModule),
      },
      {
        path: 'facilities',
        loadChildren: () =>
          import('./modules/facilities/facilities.module').then(
            (m) => m.FacilitiesModule
          ),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./modules/booking/booking.module').then(
            (m) => m.BookingModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
