import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetAds } from '../interfaces/get-ads';
import { GetRoomsListResponse } from '../../dashboard/modules/rooms/interfaces/get-rooms-list-response';
import { GetReviews } from '../interfaces/get-reviews';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  constructor(private _http: HttpClient) {}

  getRandomData(data: any[], count = 5) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  getAds(): Observable<GetAds> {
    return this._http.get<GetAds>('portal/ads');
  }

  getRoomsList(pageNumber: number): Observable<GetRoomsListResponse> {
    return this._http.get<GetRoomsListResponse>(
      'portal/rooms/available?page=' + pageNumber + '&size=5'
    );
  }
  getFavouriteRooms(): Observable<any> {
    return this._http.get('portal/favorite-rooms');
  }
  addToFavourites(id: Number): Observable<any> {
    return this._http.post('portal/favorite-rooms', id);
  }
  deleteFromFavourites(id: Number): Observable<any> {
    return this._http.delete(`portal/favorite-rooms${id}`);
  }

  // getReview(): Observable<GetReviews>{
  //   return this._http.get<GetReviews>(
  //     'portal/room-reviews/65ab7b10e815336ace2064d8'
  //   );
  // }
}
