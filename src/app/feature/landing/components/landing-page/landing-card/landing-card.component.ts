import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card.component.html',
  styleUrls: ['./landing-card.component.scss'],
})
export class LandingCardComponent {
  @Input() badgeTitle: string;
  @Input() name: string;
  @Input() location: string;
  @Input() images: string[];
  @Input() isFloatedFooter: boolean = false;

  // ngOnChanges() {
  //   this.name;
  //   this.location;

  //   debugger;
  // }
}
