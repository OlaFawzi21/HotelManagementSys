import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authBaseUrl = 'portal/users/forgot-password';

  constructor(private _http: HttpClient) {}

  forgetPassword(email: string): Observable<any> {
    return this._http.post(this.authBaseUrl, email);
  }
}
