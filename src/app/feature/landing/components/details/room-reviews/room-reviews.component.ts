import { Component, Input } from '@angular/core';

import { LandingService } from '../../../services/landing.service';
import { MessageService } from 'primeng/api';

import { RoomReview } from '../../../interfaces/room-review';

@Component({
  selector: 'app-room-reviews',
  templateUrl: './room-reviews.component.html',
  styleUrls: ['./room-reviews.component.scss'],
})
export class RoomReviewsComponent {
  @Input() roomId: string = '65ad4fc8e815336ace20cd56';

  rateValue: number = 0;
  rateText: string;
  reviewsList: RoomReview[];

  isLoggedIn: boolean = false;

  constructor(
    private _landing: LandingService,
    private _message: MessageService
  ) {
    this.isLoggedIn = localStorage.getItem('userToken') ? true : false;
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.getReviews();
    }
  }

  getReviews(): void {
    this._landing.getReviews().subscribe({
      next: ({ data }) => {
        this.reviewsList = data.roomReviews;
      },
    });
  }

  onReview(): void {
    if (this.rateValue && this.rateText) {
      const review = {
        roomId: this.roomId,
        rating: this.rateValue,
        review: this.rateText,
      };

      this._landing.addReview(review).subscribe({
        next: () => {
          this.rateValue = 0;
          this.rateText = '';
          
          this._message.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Thank you for your review',
          });

          this.getReviews();
        },
      });
    }
  }
}
