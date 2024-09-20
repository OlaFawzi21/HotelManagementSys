
import { rooms } from './../../constants/rooms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pageid:string=''
  listdetails:any
  listroomdetails:any
 images: any[] | undefined;
 facilities: any[] | undefined;

concat:any
 
 responsiveOptions: any[] | undefined;
constructor(private _LandingService:LandingService ,private _ActivatedRoute:ActivatedRoute){
  this.pageid=this._ActivatedRoute.snapshot.params['id']
}
ngOnInit(): void {
  this.getroomdetails(this.pageid)

 
  this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
}

getroomdetails(id:string){
  this._LandingService.getRoomDetails(id).subscribe({
    next:(res)=>{
  this.listroomdetails=res
  console.log(this.listroomdetails.data.rooms);
  this.images=this.listroomdetails.data.room.images
  console.log(this.images)
  this.facilities=this.listroomdetails.data.room.facilities
    }
  })
  }
  getFacilityIcon(facilityName: string): string {
    switch (facilityName) {
      case "Pets allowed":
        return "pi pi-dog"; 
      case "Lounges":
        return "pi pi-users"; 
      case "Dining & Restaurants":
        return "pi pi-utensils"; 
      case "Kitchen":
        return "pi pi-home"; 
      case "Air conditioner":
        return "pi pi-snowflake"; 
      default:
        return "pi pi-question"; 
    }
  }
 
}

