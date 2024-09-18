import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HotelManagementSys';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  private setDirection(lang: string): void {
    const rtlLink = document.getElementById('bootstrap-rtl') as HTMLLinkElement;
    if (lang === 'ar') {
      rtlLink.disabled = false;
      document.documentElement.dir = 'rtl';
    } else {
      rtlLink.disabled = true;
      document.documentElement.dir = 'ltr';
    }
  }
}
