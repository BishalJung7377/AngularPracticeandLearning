import { userkodatatypecheck } from './../../userkodatakotype';
import { Component, OnInit } from '@angular/core';
import { Interface } from 'readline';
import { UsersDataService } from 'src/app/users-data.service';



interface dataType{
  name: string,
  id : number,
  nepali : boolean,
  address: any
}


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name = "";
  todouser= [];
  email=""
  constructor(private user: UsersDataService) {
    // console.warn(this.user.getData())
    // let data = this.user.getData();
    // this.name = data.name

    // let uservariable:any= this.todouser 

    this.user.getApiData().subscribe((response:any) => {
      this.todouser  =response.data
      // this.todouser = usrdata
      // console.log(`This is user variable ${uservariable.data[0].email}`);
     
      // this.email=uservariable.data[0].email
      console.log(response)

      console.log(`This is array ko data ${this.todouser}`);
      
    })
  }

  ngOnInit(): void {
  }

  getUserValue(value: any) {
    console.warn("Values are retrieved" + value);

  }

  // Model ko kaam hho 
  getDataModel(){
    const dataModel:dataType={
      name: "Bsal Thapa",
      id: 180161,
      nepali: true,
      address: "Rajahar"
    }
    return dataModel
  }

  getDataTypeModel(){
    const datakoType: userkodatatypecheck={
      name:"Asdfgh",
      userId: 180161,
      address: "17 Street Pokhara",
      emailAddress: "asd23@gmail.com",
      male: true
    }
    return datakoType;
  }

}
