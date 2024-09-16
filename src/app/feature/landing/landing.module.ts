import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { LandingComponent } from './landing.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { AnonymousNavbarComponent } from './components/anonymous-navbar/anonymous-navbar.component';
<<<<<<< HEAD
import { ReviewsComponent } from './components/reviews/reviews.component';

=======
import { MostPopularAdsComponent } from './components/landing-page/most-popular-ads/most-popular-ads.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingCardComponent } from './components/landing-page/landing-card/landing-card.component';
import { HousesWithBeautyBackyardComponent } from './components/landing-page/houses-with-beauty-backyard/houses-with-beauty-backyard.component';
import { HotelsLargeRoomsComponent } from './components/landing-page/hotels-large-rooms/hotels-large-rooms.component';
import { BannerComponent } from './components/landing-page/banner/banner.component';
>>>>>>> 9abc3bcff6c4837a533c3394e409d0495d781211

@NgModule({
  declarations: [
    LandingComponent,
    UserNavbarComponent,
    AnonymousNavbarComponent,
<<<<<<< HEAD
    ReviewsComponent
=======
    MostPopularAdsComponent,
    LandingPageComponent,
    LandingCardComponent,
    HousesWithBeautyBackyardComponent,
    HotelsLargeRoomsComponent,
    BannerComponent,
>>>>>>> 9abc3bcff6c4837a533c3394e409d0495d781211
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
  SharedModule
  ]
})
export class LandingModule { }
