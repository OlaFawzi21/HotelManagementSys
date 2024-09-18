import { rooms } from './../../constants/rooms';
import { Component } from '@angular/core';

import { LandingService } from '../../services/landing.service';

import { Advertisment } from '../../interfaces/advertisment';
import { Image } from 'primeng/image';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  popularAdsList: any[] = [];
  beautyBackyardRoomsList: any[] = [];
  largeRooomsList: any[] = [];
  adslist: any;
  checked: boolean = false;
  constructor(
    private _landing: LandingService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getAds();
    this.getRooms();
    this.getLargeRooms();
  }

  getAds(): void {
    this._landing.getAds().subscribe({
      next: ({ data }) => {
        this.popularAdsList = this._landing.getRandomData(data.ads, 4);
      },
    });
  }

  getRooms(): void {
    this._landing.getRoomsList(1).subscribe({
      next: ({ data }) => {
        this.beautyBackyardRoomsList = this._landing.getRandomData(
          data.rooms,
          4
        );
      },
    });
  }

  getLargeRooms(): void {
    this._landing.getRoomsList(2).subscribe({
      next: ({ data }) => {
        this.largeRooomsList = this._landing.getRandomData(data.rooms, 4);
      },
    });
  }
}
