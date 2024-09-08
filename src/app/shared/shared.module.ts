import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';

import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
  ],
  exports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ToastModule,

    ChangePasswordComponent,
  ],
  providers: [MessageService],
})
export class SharedModule {}
