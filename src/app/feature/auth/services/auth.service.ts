import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResetPasswordRequest } from '../interfaces/reset-password-request';
import { ResetPasswordResponse } from '../interfaces/reset-password-response';
import { ForgetPasswordResponse } from '../interfaces/forget-password-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authBaseUrl = 'portal/users/';

  constructor(private _http: HttpClient) {}

  forgetPassword(email: string): Observable<ForgetPasswordResponse> {
    return this._http.post<ForgetPasswordResponse>(
      this.authBaseUrl + 'forgot-password',
      email
    );
  }

  resetPassword(
    formValue: ResetPasswordRequest
  ): Observable<ResetPasswordResponse> {
    return this._http.post<ResetPasswordResponse>(
      this.authBaseUrl + 'reset-password',
      formValue
    );
  }
}
