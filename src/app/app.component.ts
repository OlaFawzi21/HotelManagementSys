import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToggleButtonModule } from 'primeng/togglebutton';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'HotelManagementSys';
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang( 'ar' );
    this.translate.use('ar');
  }

}
