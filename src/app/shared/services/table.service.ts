import { Injectable } from '@angular/core';

import { SortEvent } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor() {}

  getColumnAvatars(rowImages: string | Array<any>): any {
    if (rowImages && rowImages.length < 1) {
      return [rowImages];
    }

    return rowImages;
  }
}
