import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetAds } from '../interfaces/get-ads';
import { GetRoomsListResponse } from '../../dashboard/modules/rooms/interfaces/get-rooms-list-response';

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
    return this._http.get<GetAds>('admin/ads');
  }

  getRoomsList(pageNumber: number): Observable<GetRoomsListResponse> {
    return this._http.get<GetRoomsListResponse>(
      'portal/rooms/available?page=' + pageNumber + '&size=5'
    );
  }
}
