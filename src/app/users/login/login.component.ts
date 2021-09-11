import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./SCSS/login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentValue=""
  clickValue=""

  getValue(val:any){
    console.warn(val);
    this.currentValue=val
    this.clickValue= val
  }
  getVal(val:any){
    console.warn(val);
    this.clickValue= val
  }


  show = "yes"
  res = true

  color="green"

  colors ="orange" 

  data=["Bsal", "lasd", "asd", "qwe","asdsed"]

  dataObj=[
    {
      name : "Bishal Thapa",
      age: "21"
    },{
      name : "Anil Magar",
      age: "19"
    },{
      name : "Anush hGaju",
      age: "10"
    },{
      name : "Dse Sd",
      age: "28"
    },{
      name : "asd asd",
      age: "70"
    }
  ]
  hide = true;
}
