import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { ChangePassword } from 'src/app/feature/dashboard/interfaces/change-password';
import { NavbarService } from 'src/app/feature/dashboard/services/navbar.service';
import { UserData } from 'src/app/shared/interfaces/userData';
import { UserDataService } from 'src/app/shared/services/user-data.service';


@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent {
  userProfile: UserData;
  displayDialog: boolean = false;
  items: MenuItem[] | undefined;
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor( private userData: UserDataService,
      private messageService: MessageService,
    private _Router: Router,
    private navbarService: NavbarService,
  ){}
  ngOnInit() {
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
        // command: () => {
        //   this.confirmationLogout();
        // },
      },]
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
  logOut() {
    localStorage.clear();
    this._Router.navigate(['/landing']);
  }
 
}


