import { Component, Input } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Room } from 'src/app/feature/dashboard/modules/rooms/interfaces/room';

@Component({
  selector: 'app-book-room-in-details',
  templateUrl: './book-room-in-details.component.html',
  styleUrls: ['./book-room-in-details.component.scss'],
})
export class BookRoomInDetailsComponent {
  @Input() room: any;

  rangeDates: any[];
  capacity: number = 1;

  constructor(public _translate: TranslateService) {}

  decrementCapacity(): void {
    if (this.capacity > 1) {
      this.capacity--;
    }
  }

  incrementCapacity(): void {
    this.capacity++;
  }
}
