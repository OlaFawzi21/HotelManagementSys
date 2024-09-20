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
  roomId: number = 0;
  first: number = 0;
  rows: number = 10;
  constructor(
    private _LandingService: LandingService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.roomId = this._ActivatedRoute.snapshot.params['_id'];
    console.log(this.roomId);
  }
  ngOnInit(): void {
    this.getFavouriteRooms(this.roomId);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  getFavouriteRooms(id: number) {
    id = this.roomId;
    this._LandingService.getFavouriteRooms().subscribe({
      next: (data) => {
        this.roomsList = data.data.favoriteRooms;
      },
      error: () => {},
      complete: () => {},
    });
  }

  removeFromFavourite(id: number) {
    this._LandingService.deleteFromFavourites(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: () => {},
      complete: () => {
        this.getFavouriteRooms(this.roomId);
      },
    });
  }
}
