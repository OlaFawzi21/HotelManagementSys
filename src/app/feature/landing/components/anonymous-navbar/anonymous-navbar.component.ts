import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-anonymous-navbar',
  templateUrl: './anonymous-navbar.component.html',
  styleUrls: ['./anonymous-navbar.component.scss'],
})
export class AnonymousNavbarComponent {
  formGroup: FormGroup;
  lang = 'en';
  stateOptions: any[] = [
    { label: 'Ar', value: 'ar' },
    { label: 'En', value: 'en' },
  ];

  constructor(
    private translateService: TranslateService
  ) {
    this.lang = this.translateService.currentLang;
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      language: new FormControl(this.lang),
    });
  }

  changeLang() {
    if (this.lang === 'ar') {
      localStorage.setItem('language', 'en');
    } else {
      localStorage.setItem('language', 'ar');
    }
    window.location.reload();
  }

}
