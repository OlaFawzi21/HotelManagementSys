import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-houses-with-beauty-backyard',
  templateUrl: './houses-with-beauty-backyard.component.html',
  styleUrls: ['./houses-with-beauty-backyard.component.scss'],
})
export class HousesWithBeautyBackyardComponent {
  @Input() roomsList: any[];
}
