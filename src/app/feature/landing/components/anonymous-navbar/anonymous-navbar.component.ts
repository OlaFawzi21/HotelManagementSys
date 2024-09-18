import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-anonymous-navbar',
  templateUrl: './anonymous-navbar.component.html',
  styleUrls: ['./anonymous-navbar.component.scss'],
})
export class AnonymousNavbarComponent {
  formGroup: FormGroup;

  stateOptions: any[] = [
    { label: 'Ar', value: 'ar' },
    { label: 'En', value: 'en' },
  ];

  constructor(private _app: AppService) {}

  ngOnInit() {
    const language = localStorage.getItem('language');

    this.formGroup = new FormGroup({
      language: new FormControl(language),
    });
  }

  toggleLanguage(): void {
    this._app.setDirection(this.formGroup.controls?.['language'].value);
  }
}
