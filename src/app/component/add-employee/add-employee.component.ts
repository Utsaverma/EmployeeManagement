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
    console.log('Employee Details Added Successfully');
    console.log(myForm.value);
    this.allEmployeeDetails.push(myForm.value);
    this.empDetailsServiceCall.allRecord.emit(this.allEmployeeDetails);
  }
}
