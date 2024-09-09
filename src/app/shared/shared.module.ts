import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';
import { NgxDropzoneModule } from 'ngx-dropzone';

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
    DragDropModule,
    FileUploadModule,
    NgxDropzoneModule,
  ],
  exports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    DragDropModule,
    ChangePasswordComponent,
    FileUploadModule,
    NgxDropzoneModule,
  ],
  providers: [MessageService],
})
export class SharedModule {}
