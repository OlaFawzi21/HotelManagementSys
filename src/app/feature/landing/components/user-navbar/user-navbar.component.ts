import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { AppService } from 'src/app/app.service';
import { NavbarService } from 'src/app/feature/dashboard/services/navbar.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';

import { ChangePassword } from 'src/app/feature/dashboard/interfaces/change-password';
import { UserData } from 'src/app/shared/interfaces/userData';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss'],
})
export class UserNavbarComponent {
  userProfile: UserData;
  displayDialog: boolean = false;
  items: MenuItem[] | undefined;

  formGroup: FormGroup;
  lang = 'en';

  stateOptions: any[] = [
    { label: 'Ar', value: 'ar' },
    { label: 'En', value: 'en' },
  ];

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(
    private userData: UserDataService,
    private messageService: MessageService,
    private _Router: Router,
    private navbarService: NavbarService,
    private translateService: TranslateService
  ) {
    this.lang = this.translateService.currentLang;
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      language: new FormControl(this.lang),
    });

    this.getProfile();
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user-edit',
      },
      {
        label: 'Change password',
        icon: 'pi pi-fw pi-unlock',
        command: () => this.showDialog(), // Show dialog on click
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  changeLang() {
    if (this.lang === 'ar') {
      localStorage.setItem('language', 'en');
    } else {
      localStorage.setItem('language', 'ar');
    }
    window.location.reload();
  }

  getProfile() {
    this.userData.getProfile(this.userData.id).subscribe({
      next: (res) => {
        this.userProfile = res;
      },
    });
  }
  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }
  changePassword() {
    this.changePasswordForm.markAllAsTouched();
    if (this.changePasswordForm.valid) {
      this.navbarService
        .changePassword(this.changePasswordForm.value as ChangePassword)
        .subscribe({
          complete: () => {
            this.hideDialog();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Password changed successfully!',
            });
            this._Router.navigate(['/dashboard']);
          },
        });
    }
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
