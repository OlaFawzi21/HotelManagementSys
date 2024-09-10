import { Component } from '@angular/core';

import { RoomService } from '../../services/room.service';

import { TableColumn } from 'src/app/shared/interfaces/table-column';
import { Room } from '../../interfaces/room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent {
  columns: TableColumn[] = [];
  roomsList: Room[] = [];

  paginator = true;
  totalRecords: number;
  footerKey = 'rooms';

  constructor(private _room: RoomService) {
    this.columns = this._room.tableColumns;
  }

  ngOnInit() {
    this.getRoomsList();
  }

  getRoomsList(): void {
    this._room.getRoomsList().subscribe({
      next: ({ data }) => {
        this.roomsList = data.rooms;
        this.totalRecords = data.totalCount;
      },
      error: () => {
        window.alert('fail');
      },
    });
  }
}
