import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, InputTextModule, PasswordModule, ButtonModule],
  exports: [InputTextModule, PasswordModule, ButtonModule],
})
export class SharedModule {}
