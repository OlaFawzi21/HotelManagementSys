import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  rangeDates: any[];
  capacity: number = 1;

  constructor(public _translate: TranslateService) {}

  test() {
    console.log('rangeDates', this.rangeDates);
  }

  decrementCapacity(): void {
    if (this.capacity > 1) {
      this.capacity--;
    }
  }

  incrementCapacity(): void {
    this.capacity++;
  }
}
