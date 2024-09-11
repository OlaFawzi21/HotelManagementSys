import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RoomService } from '../../services/room.service';

import { RoomFacility } from '../../interfaces/room-facility';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../interfaces/room';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss'],
})
export class AddEditRoomComponent {
  loading = false;

  facilitiesDropDown: RoomFacility[] = [];

  id: string;
  details: Room;

  multipleImages = true;
  imagesLimit = 5;
  images: any[] = [];

  roomForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    facilities: new FormControl([], [Validators.required]),
  });

  constructor(
    private _room: RoomService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe({
      next: ({ id }) => {
        this.id = id;

        if (this.id) {
          this.initRoom();
        }
      },
    });
  }

  ngOnInit(): void {
    this.getRoomFacilities();
  }

  getRoomFacilities(): void {
    this._room.getRoomFacilities().subscribe({
      next: ({ data }) => {
        this.facilitiesDropDown = data.facilities;
      },
      error: () => {},
    });
  }

  initRoom(): void {
    this._room.getRoomById(this.id).subscribe({
      next: ({ data }) => {
        this.details = data.room;

        const { roomNumber, price, capacity, discount, facilities }: any =
          this.details;

        this.roomForm.patchValue({
          roomNumber,
          price,
          capacity,
          discount,
          facilities: facilities.map((facility: any) => facility._id),
        });
      },
    });
  }

  cancel(): void {}

  submit(): void {
    this.roomForm.markAllAsTouched();

    if (this.roomForm.valid) {
      const roomFormData: FormData = new FormData();

      for (const [key, value] of Object.entries(this.roomForm.value)) {
        if (Array.isArray(value)) {
          value?.forEach((element) => {
            roomFormData.append(key, element);
          });
        } else {
          roomFormData.append(key, value as any);
        }
      }

      this.images.forEach((image: File, index: number) => {
        roomFormData.append('imgs', image); // 'imgs' is the field name for images
      });

      if (this.id) {
        this.editRoom(roomFormData);
      } else {
        this.addRoom(roomFormData);
      }

      window.alert('success');
    }
  }

  addRoom(formData: FormData): void {
    this._room.addRoom(formData).subscribe({
      next: () => {},
      error: () => {},
    });
  }

  editRoom(formData: FormData): void {
    this._room.editRoom(formData, this.id).subscribe({
      next: () => {},
      error: () => {},
    });
  }

  updateImages(e: any): void {
    this.images = Array.from(e);
  }
}
