import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../interfaces/login-request';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginResponse } from '../../interfaces/login-response';
import { UserDataService } from 'src/app/shared/services/userData.service';
import { UserData } from 'src/app/shared/interfaces/userData';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading: boolean = false;
  response: LoginResponse;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private userData: UserDataService
  ) {}

  onLogin(data: FormGroup) {
    this.loginForm.markAllAsTouched();
    if (data.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(data.value as LoginRequest).subscribe({
      next: (res) => {
        this.response = res;
      },
      error: (error) => {
        // this.loading = false;
        // this.messageService.add({
        //   severity: 'error',
        //   summary: 'Fail',
        //   detail: error.error.message,
        // });
      },
      complete: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: this.response.message,
        });
        setTimeout(() => {
          localStorage.setItem('userToken', this.response.data.token);
          if (this.response.data.user.role == 'admin') {
            this.router.navigate(['/dashboard']);
          } else if (this.response.data.user.role == 'user') {
            this.router.navigate(['/landing']);
          }
        }, 1000);
      },
    });
  }
}
