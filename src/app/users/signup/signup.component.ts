import { UsersDataService } from './../../users-data.service';
import { Component, OnInit } from '@angular/core';



interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{ 
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  a = 5000;
  b = 6000;
  getuserMoney() {
    return alert("This user have total money of Rs" + (this.a + this.b))
  }
  getName(name:any) {
    return alert(name)
  }

  model = {
    left: true,
    middle: false,
    right: false
  };

  ngOnInit(): void {
  }
  name="BiShal JuNg"

  disabledbox= true  
  enablebox(){
    this.disabledbox = false
  }
  color = "orange";
  updatecolor(){
    this.color ="red"
  }
  updatecolorClick(){
    this.color ="blue"
  }
date = new Date();
  err = false

  alerts: Alert[] = [];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  str="Word Curt Angular Hellow "

  currency=10
}
