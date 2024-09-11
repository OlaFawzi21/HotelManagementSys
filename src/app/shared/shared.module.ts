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
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MessageService } from 'primeng/api';

import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileImagePickerComponent } from './components/profile-image-picker/profile-image-picker.component';
import { TableComponent } from './components/table/table.component';
import { PasswordHintPopOverComponent } from './components/password-hint-pop-over/password-hint-pop-over.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ProfileImagePickerComponent,
    TableComponent,
    PasswordHintPopOverComponent,
    GalleryComponent,
    LogoutComponent,
  ],
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
    TableModule,
    DividerModule,
    AvatarModule,
    AvatarGroupModule,
    GalleriaModule,
    DialogModule,
    TieredMenuModule,
    CardModule,
    ChartModule,
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
    TableModule,
    DividerModule,
    AvatarModule,
    AvatarGroupModule,
    GalleriaModule,
    DialogModule,
    TieredMenuModule,
    CardModule,
    ChartModule,

    TableComponent,
    ChangePasswordComponent,
    ProfileImagePickerComponent,
    PasswordHintPopOverComponent,
  ],
  providers: [MessageService],
})
export class SharedModule {}
