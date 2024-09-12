import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Output() exitEmitter = new EventEmitter();

  @Input() images: string[];
  @Input() visible: boolean;
  @Input() responsiveOptions: any;

  constructor() {}

  ngOnInit() {
    console.log('images', this.images);
  }

  onClose(): void {
    window.alert(123);
    debugger;
    this.exitEmitter.emit();
  }
}
