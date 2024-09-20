import { Component, Input } from '@angular/core';

import { LandingService } from '../../../services/landing.service';
import { MessageService } from 'primeng/api';

import { RoomComment } from '../../../interfaces/room-comment';

@Component({
  selector: 'app-room-comments',
  templateUrl: './room-comments.component.html',
  styleUrls: ['./room-comments.component.scss'],
})
export class RoomCommentsComponent {
  @Input() roomId: string;

  comment: string;
  commentsList: RoomComment[];

  isLoggedIn: boolean = false;

  constructor(
    private _landing: LandingService,
    private _message: MessageService
  ) {
    this.isLoggedIn = localStorage.getItem('userToken') ? true : false;
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.getComments();
    }
  }

  getComments(): void {
    this._landing.getComments().subscribe({
      next: ({ data }) => {
        this.commentsList = data.roomComments;
      },
    });
  }

  onComment(): void {
    if (this.comment) {
      const roomComment = {
        roomId: this.roomId,
        comment: this.comment,
      };

      this._landing.addComment(roomComment).subscribe({
        next: () => {
          this.comment = '';

          this._message.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Thank you for your comment',
          });

          this.getComments();
        },
      });
    }
  }
}
