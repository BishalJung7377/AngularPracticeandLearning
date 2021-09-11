import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { userkodatatypecheck } from './userkodatakotype';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) {

   }
   getApiData(){
    let url="https://reqres.in/api/users?page=2";
    return this.http.get(url);
  }
  getData(){
    return {
      name: "Bsal",
      age: 21,
      id: 180161,
    }
  }
  

  // model banayera data ko type check gareko 
  getandCheckuserdatatype(){
    const dataTypeis:userkodatatypecheck={
      name:"Asdfgh",
      userId: 180161,
      address: "17 Street Pokhara",
      emailAddress: "asd23@gmail.com",
      male: true
    } 
    return dataTypeis
    }
   
  }

