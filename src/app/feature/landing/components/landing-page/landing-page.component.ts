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
  constructor(private _landing: LandingService,private translate: TranslateService) {}

  ngOnInit() {
    this.getAds();
    this.getRooms();
    this.getLargeRooms();
  }

  getAds(): void {
    this._landing.getAds().subscribe({
      next: ({ data }) => {
        this.adslist = data.ads;

        console.log(this.adslist);
        
        this.translate.get('rooms').subscribe((items: any[]) => {
         
          const roomsExtraData = this._landing.getRandomData(items, 4);

          roomsExtraData.forEach((room, index) => {
            this.popularAdsList.push({
  
              ...data.ads[index],
                name: room.name,
              image:room.image,
              location: room.location,
            });
          });
        });
       
      },
    });
  }

  getRooms(): void {
    this._landing.getRoomsList(1).subscribe({
      next: ({ data }) => {
        this.translate.get('rooms').subscribe((items: any[]) => {
          const roomsExtraData = this._landing.getRandomData(items, 4);

          roomsExtraData.forEach((room, index) => {
            this.beautyBackyardRoomsList.push({
              ...data.rooms[index],
              name: room.name,
              image:room.image,
              location: room.location,
            });
          });
        });
     
      },
    });
  }

  getLargeRooms(): void {
    this._landing.getRoomsList(2).subscribe({
      next: ({ data }) => {
        this.translate.get('rooms').subscribe((items: any[]) => {
          const roomsExtraData = this._landing.getRandomData(items, 4);
          roomsExtraData.forEach((room, index) => {
            this.largeRooomsList.push({
              ...data.rooms[index],
              name: room.name,
              image:room.image,
              location: room.location,
            });
          });
        });
        

      
      },
    });
  }
}
