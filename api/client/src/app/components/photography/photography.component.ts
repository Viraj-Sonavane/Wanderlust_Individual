import { Component, OnInit } from '@angular/core';
import {PhotographyService} from '../../services/photography.service'

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  providers: [PhotographyService]
})
export class PhotographyComponent implements OnInit {
  photographys:  Array<any>;
    photography = { 
      photographyPlace: '',
      photographyDescription: '',
      photographyReview: '',
      photographyAddress: '',
      isOpen: false
   };

  constructor(private photoservice:PhotographyService) { }

 
  addPhotographyLocation():void{
    console.log("add")
    const newPhotographyLocation = {
      photographyPlace: this.photography.photographyPlace,
      photographyDescription: this.photography.photographyDescription,
      photographyReview: this.photography.photographyReview,
      photographyAddress: this.photography.photographyAddress,
      isOpen: this.photography.isOpen
    }

    this.photoservice.create(newPhotographyLocation).subscribe(
      response => {
        this.photographys.push(response)
        console.log(response);
        console.log("photographylocation: saved in database");
      },
      error => {
        console.log(error);
      });
  }

  getPhotographyLocation():void{
    console.log("get")
    this.photoservice.getPhotographyLocation()
    .subscribe(
      data=>{
        this.photographys=data;
        console.log("getPhotographyLocation => " + this.photographys);
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  deleteAll(): void {
    this.photoservice.deleteAll()
    .subscribe(
      data => {
        console.log(data);
        this.getPhotographyLocation();
      },
      error => {
        console.log(error);
      });
  }

  deletePhotographyLocation(ind): void {
    this.photoservice.delete(ind)
      .subscribe(
        response => {
          console.log(response);
          this.getPhotographyLocation();
          },
        error => {
          console.log(error);
        });
  }

  updatePhotographyLocation(ind, data): void {
    this.photoservice.update(ind, data)
      .subscribe(
        response => {
          console.log(response);
          this.getPhotographyLocation();
        },
        error => {
          console.log(error);
        });
  }
    ngOnInit(): void {
    console.log("kkk");
    this.photoservice.getPhotographyLocation().subscribe(photographys => this.photographys=photographys);
  }

}
