import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';

import { MessageService } from 'primeng/api';

import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileImagePickerComponent } from './components/profile-image-picker/profile-image-picker.component';

@NgModule({
  declarations: [ChangePasswordComponent, ProfileImagePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    ScrollPanelModule,
    FileUploadModule,
    ImageModule,
  ],
  exports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    ScrollPanelModule,
    FileUploadModule,
    ImageModule,

    ChangePasswordComponent,
    ProfileImagePickerComponent,
  ],
  providers: [MessageService],
})
export class SharedModule {}
