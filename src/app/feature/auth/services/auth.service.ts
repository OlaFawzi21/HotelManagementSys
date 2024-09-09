import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResetPasswordRequest } from '../interfaces/reset-password-request';
import { ResetPasswordResponse } from '../interfaces/reset-password-response';
import { ForgetPasswordResponse } from '../interfaces/forget-password-response';
import { LoginRequest } from '../interfaces/login-request';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authBaseUrl = 'portal/users/';
  constructor(private _http: HttpClient) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(this.authBaseUrl + 'login', data);
  }

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
