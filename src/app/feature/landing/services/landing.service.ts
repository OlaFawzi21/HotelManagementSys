import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetAds } from '../interfaces/get-ads';
import { GetRoomsListResponse } from '../../dashboard/modules/rooms/interfaces/get-rooms-list-response';
import { GetRoomReviewsResponse } from '../interfaces/get-room-reviews-response';
import { AddReview } from '../interfaces/add-review';
import { AddReviewResponse } from '../interfaces/add-review-response';
import { GetRoomsCommentsResponse } from '../interfaces/get-room-comments-response';
import { AddComment } from '../interfaces/add-comment';
import { AddCommentResponse } from '../interfaces/add-comment-response';

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

  // getReview(): Observable<GetReviews>{
  //   return this._http.get<GetReviews>(
  //     'portal/room-reviews/65ab7b10e815336ace2064d8'
  //   );
  // }
  adsBaseUrl = 'portal/ads';
  roomBaseUrl = 'portal/rooms';

  getAdsDetails(id: string) {
    return this._http.get(this.adsBaseUrl + '/' + id);
  }
  getRoomDetails(id: string) {
    return this._http.get(this.roomBaseUrl + '/' + id);
  }

  getReviews(): Observable<GetRoomReviewsResponse> {
    return this._http.get<GetRoomReviewsResponse>(
      'portal/room-reviews/65ad4fc8e815336ace20cd56'
    );
  }

  addReview(review: AddReview): Observable<AddReviewResponse> {
    return this._http.post<AddReviewResponse>('portal/room-reviews', review);
  }

  getComments(): Observable<GetRoomsCommentsResponse> {
    return this._http.get<GetRoomsCommentsResponse>(
      'portal/room-comments/65ad4fc8e815336ace20cd56'
    );
  }

  addComment(comment: AddComment): Observable<AddCommentResponse> {
    return this._http.post<AddCommentResponse>('portal/room-comments', comment);
  }
}
