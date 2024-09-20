import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailsComponent } from './components/details/details.component';
import { FavouriteComponent } from './components/favourite/favourite.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,

    children: [
      { path: '', component: LandingPageComponent },
      { path: 'favourite', component: FavouriteComponent },
      { path: 'favourite/:_id', component: FavouriteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
