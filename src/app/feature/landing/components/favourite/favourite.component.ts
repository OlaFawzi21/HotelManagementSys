import { PaginatorModule } from 'primeng/paginator';
import { rooms } from './../../constants/rooms';
import { RoomService } from 'src/app/feature/dashboard/modules/rooms/services/room.service';
import { LandingService } from './../../services/landing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  roomsList: any[] = [];
  first: number = 0;
  rows: number = 10;
  TotalPages: number = 0;

  constructor(private _LandingService: LandingService) {}

  ngOnInit(): void {
    // this.getFavouriteRooms();
    this.Pagination();
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  getFavouriteRooms() {
    this._LandingService.getFavouriteRooms().subscribe({
      next: (data) => {
        this.roomsList = data.data.favoriteRooms;
      },
    });
  }

  Pagination() {
    this._LandingService.Pagination(this.first, this.rows).subscribe({
      next: ({ data }) => {
        this.roomsList =
          data.favoriteRooms &&
          data.favoriteRooms.length &&
          data.favoriteRooms[0].rooms;
        this.TotalPages = data.totalCount;
      },
    });
  }
}
