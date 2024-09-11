import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserData } from 'src/app/shared/interfaces/userData';
import { UserDataService } from 'src/app/shared/services/userData.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userProfile: UserData;
  items: MenuItem[] | undefined;

  constructor(private userData: UserDataService) {}

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
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
      },
    ];
  }

  getProfile() {
    this.userData.getProfile(this.userData.id).subscribe({
      next: (res) => {
        this.userProfile = res;
      },
    });
  }
}
