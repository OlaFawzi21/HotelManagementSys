import { Component, EventEmitter, Input } from '@angular/core';
import { LandingService } from '../../../services/landing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card.component.html',
  styleUrls: ['./landing-card.component.scss'],
})
export class LandingCardComponent {
  roomId: number = 0;
  @Input() badgeTitle: string;
  @Input() name: string;
  @Input() images: string[];
  @Input() isFloatedFooter: boolean = false;
  @Input() type: string;
  @Input() id: string;

  constructor(
    private _LandingService: LandingService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.roomId = this._ActivatedRoute.snapshot.params['_id'];
    console.log(this.roomId);
  }
  addToFavourite(id: number) {
    id = this.roomId;

    this._LandingService.addToFavourites(this.roomId).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
