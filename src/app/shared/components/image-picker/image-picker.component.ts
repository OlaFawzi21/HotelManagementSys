import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent {
  @Output() imagesEmitter = new EventEmitter();

  @Input() multiple = false;
  @Input() name: string;
  @Input() fileLimit: number = 1;

  images: any[] = [];

  uploadImage(e: any): void {
    this.images = Array.from(e.currentFiles);
    this.imagesEmitter.emit(this.images);
  }
}
