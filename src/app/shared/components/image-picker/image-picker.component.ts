import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent {
  @Output() imagesEmitter = new EventEmitter();

  @Input() initialImages: any[] = [];
  @Input() multiple = false;
  @Input() name: string;
  @Input() fileLimit: number = 1;

  images: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialImages']) {
      this.initialImages.forEach((image) => {
        debugger;

        this.images.push({
          name: image,
          objectURL: URL.createObjectURL(image), // Create an object URL for image preview
        });
      });
    }
  }

  getImage(imageContent: any): any {
    if (typeof imageContent == 'string') {
      return imageContent;
    }

    return imageContent?.objectURL?.changingThisBreaksApplicationSecurity;
  }

  uploadImage(e: any): void {
    this.images = [];

    for (let file of e.currentFiles) {
      this.images.push({
        name: file.name,
        objectURL: URL.createObjectURL(file), // Create an object URL for image preview
      });
    }

    this.imagesEmitter.emit(this.images);
  }
}
