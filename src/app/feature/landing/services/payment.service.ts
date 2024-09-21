import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseUrl = 'portal/booking';
  constructor(private _http: HttpClient) {}

  createBooking(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data);
  }
  id: string;
  payment(tokenId: string): Observable<any> {
    return this._http.post(`${this.baseUrl}/${this.id}/pay`, {
      token: tokenId,
    });
  }
}
