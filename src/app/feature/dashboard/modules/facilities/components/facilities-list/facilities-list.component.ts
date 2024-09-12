import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FacilitiesService } from '../../services/facilities.service';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

import { Facility } from '../../interfaces/facility';
import { TableColumn } from 'src/app/shared/interfaces/table-column';

import { DeleteItemComponent } from 'src/app/shared/components/delete-item/delete-item.component';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.scss'],
  providers: [DialogService],
})
export class FacilitiesListComponent {
  columns: TableColumn[] = [];
  facilitiesList: Facility[] = [];

  paginator = true;
  totalRecords: number;
  footerKey = 'facility';

  deleteRef: DynamicDialogRef;

  constructor(
    private _facility: FacilitiesService,
    private _router: Router,
    public _dialog: DialogService,
    public messageService: MessageService
  ) {
    this.columns = this._facility.tableColumns;
  }

  ngOnInit() {
    this.getFacilitiesList();
  }

  getFacilitiesList(): void {
    this._facility.getFacilities().subscribe({
      next: ({ data }) => {
        this.facilitiesList = data.facilities;
        this.totalRecords = data.totalCount;
      },
    });
  }

  addFacility(): void {}

  onView(e: Facility): void {}

  onEdit(e: Facility): void {}

  onDelete(e: Facility): void {
    this.deleteRef = this._dialog.open(DeleteItemComponent, {
      data: {
        id: e._id,
        name: 'facility',
      },
      header: '',
    });

    this.deleteRef.onClose.subscribe((id: any) => {
      this.deleteFacility(id);
    });
  }

  deleteFacility(id: string): void {
    this._facility.deleteFacility(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Facility is deleted successfully!',
        });

        this.getFacilitiesList();
      },
    });
  }
}
