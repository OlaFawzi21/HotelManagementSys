import { Component, Input } from '@angular/core';
import { Room } from 'src/app/feature/dashboard/modules/rooms/interfaces/room';

@Component({
  selector: 'app-book-room-in-details',
  templateUrl: './book-room-in-details.component.html',
  styleUrls: ['./book-room-in-details.component.scss'],
})
export class BookRoomInDetailsComponent {
  @Input() room: Room;
}
