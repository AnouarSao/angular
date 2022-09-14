import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit {
  collection!: any[];

  nextVal = 0;

  constructor(private photoService: PhotoService) {
    this.photoService.collection.subscribe((data) => {
      this.collection = data;

      console.log(this.collection); // attention de ne écrire cette ligne en dehors des {}, sinon undefined
    });
  }

  ngOnInit(): void {}

  onNext() {
    this.nextVal++;
  }
  onPrev() {
    if (this.nextVal > 0) {
      this.nextVal--;
    }
  }
}
