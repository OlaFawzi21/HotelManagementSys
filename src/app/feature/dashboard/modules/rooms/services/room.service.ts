import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TableColumn } from 'src/app/shared/interfaces/table-column';
import { GetRoomsListResponse } from '../interfaces/get-rooms-list-response';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  roomsBaseUrl = 'admin/rooms';

  constructor(private _http: HttpClient) {}

  // Handle rooms table
  get tableColumns(): TableColumn[] {
    return [
      {
        type: 'text',
        header: 'Room Number',
        field: 'roomNumber',
      },
      {
        type: 'images',
        header: 'Images',
        field: 'images',
      },
      {
        type: 'number',
        header: 'Price',
        field: 'price',
        decimalPlaces: 2,
      },
      {
        type: 'number',
        header: 'Capacity',
        field: 'capacity',
        decimalPlaces: 0,
      },
      {
        type: 'number',
        header: 'Discount',
        field: 'discount',
        decimalPlaces: 0,
      },
      {
        type: 'object',
        header: 'Created By',
        field: 'createdBy',
        objectKey: 'userName',
      },
      {
        type: 'date',
        header: 'Created At',
        field: 'createdAt',
        format: 'dd/mm/yyyy',
      },
      {
        type: 'object',
        header: 'Created By',
        field: 'createdBy',
        objectKey: 'userName',
      },
      {
        type: 'date',
        header: 'Created At',
        field: 'createdAt',
        format: 'dd/mm/yyyy',
      },
      {
        type: 'actions',
        header: 'Actions',
        field: 'actions',
        actions: {
          isView: true,
          isEdit: true,
          isDelete: true,
        },
        isFrozen: true,
        frozenDirection: 'right',
      },
    ];
  }

  // HTTP Requests
  getRoomsList(): Observable<GetRoomsListResponse> {
    return this._http.get<GetRoomsListResponse>(
      this.roomsBaseUrl + '?page=1&size=1000000'
    );
  }
}
