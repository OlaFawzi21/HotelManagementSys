import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/userData';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  authBaseUrl = 'portal/users/';

  token: any = localStorage.getItem('userToken');
  decoded: any = jwtDecode(this.token);

  constructor(private _http: HttpClient) {}

  getProfile(id: string): Observable<UserData> {
    return this._http.get<UserData>(`${this.authBaseUrl}${id}`);
  }
}
