import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { BookingService } from '../../services/booking.service';

import { TableColumn } from 'src/app/shared/interfaces/table-column';
import { Booking } from '../../interfaces/booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  providers: [DialogService],
})
export class BookingListComponent {
  columns: TableColumn[] = [];
  bookingList: Booking[] = [];

  paginator = true;
  totalRecords: number;
  footerKey = 'bookings';

  deleteRef: DynamicDialogRef;

  constructor(
    private _booking: BookingService,
    public _dialog: DialogService,
    public messageService: MessageService
  ) {
    this.columns = this._booking.tableColumns;
  }

  ngOnInit() {
    this.getBookingList();
  }

  getBookingList(): void {
    this._booking.getBookingList().subscribe({
      next: ({ data }) => {
        this.bookingList = data.booking;
        this.totalRecords = data.totalCount;
      },
    });
  }

  onView(e: Booking): void {}

  onDelete(e: Booking): void {}

  deleteBooking(id: string): void {}
}
