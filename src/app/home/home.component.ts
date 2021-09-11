import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }
  username = "Bishal Jung Thapa 180161@softwarica";
  livesin = "Dillibazar,Kathmandu";
  a= 1500;
  b= 500;
  // function adding two values 
  getUserMoney(){
    return this.a + this.b
  }

  father = "Jagat bahadur Thapa";
  mother = "Laxmi Thapa"

  // function  
  getfathermothername(){
    return this.father + " ," + this.mother
  }

  // object in angular 
  obj={
    name:"Raju bahadur Thapa",
    email: "raju23@gmail.com",
    address:"Unioted States",
  }

  // Array in angular 
  meealtype = ["veg", "non-veg", "BBQ", "Chicken Matka", "Chicken Briyani", "Fish Fry"]


  ///window object and site url

  siteUrl = window.location.href
  aboutUrl(){
    window.location.href = "https://about.google/";
  }
  aboutCnn(){
    window.location.href='http://www.cnn.com/';
  }
  
}
