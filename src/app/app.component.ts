import { MockService } from './mock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rating1';
  rate:number= 4
  starList: boolean[] = [];       // create a list which contains status of 5 stars
  rating:number;  
  restaurants: any[];
  getRate:number;
  id:number;
  constructor(private mock:MockService){}
  
  
  ngOnInit(){
    this.getRating()
  }
  

  getRating(){

    this.mock.getData().subscribe(data => {
     
      console.log(data.restaurants)
      this.restaurants = data.restaurants
      console.log(this.restaurants)

      this.restaurants.forEach(element => {
        console.log(element)
      this.getRate=element.rating
      this.id=element.id

      if(this.getRate){
    
   for (let j = 0; j < this.getRate; j++) {
        this.starList.push(true);
      }
      for (let k = 0; k < 5 - this.getRate; k++) {
        this.starList.push(false);
      }
    }

   
    })
  })
    
  }

  

}
