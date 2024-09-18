import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'HotelManagementSys';
  
  constructor(private translate: TranslateService, private _app: AppService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this._app.setDirection('en');
  }
}
