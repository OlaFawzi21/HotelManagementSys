import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SortEvent } from 'primeng/api';

import { TableService } from '../../services/table.service';
import { TableColumn } from '../../interfaces/table-column';

import { environment } from 'src/app/core/environments/environment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Output() viewEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  @Input() columns: TableColumn[];
  @Input() data: any[];

  @Input() paginator: boolean;
  @Input() rows: number = 5;
  @Input() showCurrentPageReport: boolean = true;
  @Input() rowsPerPageOptions: number[] = [5, 10, 20];
  @Input() footerKey: string;
  @Input() totalRecords: number;
  @Input() pageLinks: number = 3;
  @Input() frozenColumns = [];

  currentPageReportTemplate = 'Showing {first} to {last} of {totalRecords}';

  imageUrl: string;
  showImagesGallery: boolean = false;
  currentRowImages: any[] = [];

  constructor(private _table: TableService) {
    this.imageUrl = environment.imageUrl;
  }

  onSort(event: SortEvent): void {}

  onView(e: any): void {
    this.viewEmitter.emit(e);
  }

  onEdit(e: any): void {
    this.editEmitter.emit(e);
  }

  onDelete(id: number): void {
    this.deleteEmitter.emit(id);
  }

  getColumnAvatars(rowImages: string | Array<any>): any[] {
    return this._table.getColumnAvatars(rowImages);
  }

  openGallery(images: any[]): void {
    this.currentRowImages = images;

    this.showImagesGallery;
    debugger;

    if (!this.showImagesGallery) {
      this.showImagesGallery = true;
    }
  }

  // updateShowGallery(e: any): void {
  //   e;
  //   debugger;
  //   this.showImagesGallery = e;
  // }
}
