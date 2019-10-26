import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared/shared.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  phoneList:any=[];
  emailList:any=[];
  addressList:any=[];
  phoneLen:number=0;
  addressLen:number=0;
  empData:any=[];
  constructor(private sharedService:SharedService) { }
  ngOnInit() {0
    this.phoneLen=0;
    this.addressLen=0;
    this.phoneList.push("phone0");
    this.emailList.push("email0");
    this.addressList.push("address0")
  }
  submitForm(empObj){
    var newObj:any={}
    newObj["phone"]=[];
    newObj["email"]=[];
    newObj["address"]=[];
    var keysList=Object.keys(empObj);
    keysList.forEach((key)=>{
      if(key.startsWith("phone")){
        newObj["phone"].push(empObj[key]);
      }
      else if(key.startsWith("email")){
        newObj["email"].push(empObj[key]);
      }
      else if(key.startsWith("address")){
        newObj["address"].push(empObj[key]);
      }
      else{
        newObj[key]=empObj[key];
      }
    });
    this.empData.push(newObj);
    this.sharedService.allRecord.emit(this.empData);
    console.log(this.empData)
  }
  addMoreContact(){
    this.phoneLen=this.phoneLen+1;
    this.phoneList.push("phone"+this.phoneLen);
    this.emailList.push("email"+this.phoneLen);
    setTimeout(() => {
      $($(".contactLabel"+this.phoneLen)[0]).addClass("d-none")
      $($("#addIcon"+this.phoneLen)[0]).addClass("d-none");
      $($("#removeIcon"+this.phoneLen)[0]).removeClass("d-none");
    });
  }
  removeContact(event){
    $(event.target).parents().eq(1).addClass("d-none");
  }
  addMoreAddress(){
    this.addressLen=this.addressLen+1;
    this.addressList.push("address"+this.addressLen);
    setTimeout(() => {
      $($(".addressLabel"+this.addressLen)[0]).addClass("d-none")
      $($("#addIconAddress"+this.addressLen)[0]).addClass("d-none");
      $($("#removeIconAddress"+this.addressLen)[0]).removeClass("d-none");
    });
  }
  removeAddress(event){
    $(event.target).parents().eq(1).addClass("d-none");
  }
}
