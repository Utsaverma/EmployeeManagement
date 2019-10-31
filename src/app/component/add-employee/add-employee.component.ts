import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetailsService } from './../../shared/EmployeeDetails.service';
declare var $;

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  success:string="";
  empIdFlag:boolean=false;
  private countPhone:number = 1;
  private countEmail:number = 1;
  private countAddress:number = 1;
  phoneNumberIds:number[] = [1];
  emailIDS:number[] = [1];
  addresses:number[] = [1];
  allEmployeeDetails:any;
  constructor(private empDetailsServiceCall: EmployeeDetailsService) { }
  @ViewChild('myForm')
  private myForm: NgForm;
  ngOnInit() {
    this.success="";
    this.empIdFlag=false;
    this.allEmployeeDetails=[];
  }
  remove(i:number) {
    this.phoneNumberIds.splice(i, 1);
  }
  add(i:number) {
    this.phoneNumberIds.push(++this.countPhone);
    setTimeout(() => {
      $($("#addPhoneIcon"+i)[0]).addClass("d-none");
      $($("#removePhoneIcon"+i)[0]).removeClass("d-none");
    });
  }
  addEmail(i:number) {
    this.emailIDS.push(++this.countEmail);
    setTimeout(() => {
      $($("#addEmailIcon"+i)[0]).addClass("d-none");
      $($("#removeEmailIcon"+i)[0]).removeClass("d-none");
    });
  }
  removeEmail(i:number) {
    this.emailIDS.splice(i, 1);
  }
  addAddress(i:number) {
    this.addresses.push(++this.countAddress);
    setTimeout(() => {
      $($("#addIcon"+i)[0]).addClass("d-none");
      $($("#removeIcon"+i)[0]).removeClass("d-none");
    });
  }
  removeAddress(i:number) {
    this.addresses.splice(i, 1);
  }
  register (myForm: NgForm) {
    this.success="";
    console.log('Employee Details Added Successfully');
    console.log(myForm.value);
    let age:number;
    const bdate = new Date(myForm.value["dob"]);
    const timeDiff = Math.abs(Date.now() - bdate.getTime() );
    age= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    myForm.value["age"]=age;
    //modifying addresses
    let addObj:any;
    let addList=[];
    let FormAddresses=myForm.value["addresses"];
    for(let i=1;i<=this.countAddress;i++){
      addObj={};
      let street="street["+i+"]";
      let city="city["+i+"]";
      let state="state["+i+"]";
      let country="country["+i+"]";
      let pin="pin["+i+"]";
      addObj["street"]=FormAddresses[street];
      addObj["city"]=FormAddresses[city];
      addObj["state"]=FormAddresses[state];
      addObj["country"]=FormAddresses[country];
      addObj["pin"]=FormAddresses[pin];
      addList.push(addObj);
    }
    myForm.value["addList"]=addList;
    this.allEmployeeDetails.push(myForm.value);
    this.empDetailsServiceCall.setAllrecord(this.allEmployeeDetails);
    this.success="Employee Registered Successfully!!!"
    myForm.reset();
    setTimeout(() => {
      this.success="";
    },3000);
  }
  uniqueEmpId(empID){
    this.empIdFlag=false;
    for(let i=0;i<this.allEmployeeDetails.length;i++){
      var emp=this.allEmployeeDetails[i];
      if(emp.empID==empID){
        this.empIdFlag=true;
      }
      if(this.empIdFlag){
        break;
      }
    }
  }
}
