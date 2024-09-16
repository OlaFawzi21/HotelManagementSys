import { Component } from '@angular/core';

import { LandingService } from '../../services/landing.service';

import { Advertisment } from '../../interfaces/advertisment';
import { rooms } from '../../constants/rooms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  popularAdsList: any[] = [];
  beautyBackyardRoomsList: any[] = [];
  largeRooomsList: any[] = [];

  constructor(private _landing: LandingService) {}

  ngOnInit() {
    this.getAds();
    this.getRooms();
    this.getLargeRooms();
  }

  getAds(): void {
    this._landing.getAds().subscribe({
      next: ({ data }) => {
        const roomsExtraData = this._landing.getRandomData(rooms, 4);

        roomsExtraData.forEach((room, index) => {
          this.popularAdsList.push({
            ...data.ads[index],
            name: room.name,
            location: room.location,
          });
        });
      },
    });
  }

  getRooms(): void {
    this._landing.getRoomsList(1).subscribe({
      next: ({ data }) => {
        const roomsExtraData = this._landing.getRandomData(rooms, 4);

        roomsExtraData.forEach((room, index) => {
          this.beautyBackyardRoomsList.push({
            ...data.rooms[index],
            name: room.name,
            location: room.location,
          });
        });
      },
    });
  }

  getLargeRooms(): void {
    this._landing.getRoomsList(2).subscribe({
      next: ({ data }) => {
        const roomsExtraData = this._landing.getRandomData(rooms, 4);

        roomsExtraData.forEach((room, index) => {
          this.largeRooomsList.push({
            ...data.rooms[index],
            name: room.name,
            location: room.location,
          });
        });
      },
    });
  }
}
