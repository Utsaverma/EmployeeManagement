import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {EmployeeDetailsService} from "./../../shared/EmployeeDetails.service";
declare var $;
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  filteredData:any=[];
  flag:boolean=false;
  errorMsg:string;
  empData:any = [];
  dataSource:any;
  @ViewChild('dataTable') table : ElementRef;
  dataTable: any;
  dtOptions: any;
  constructor(private empDetailsServiceCall:EmployeeDetailsService) { }
  ngOnInit() {
    this.flag=false;
    this.errorMsg="";
    this.dtOptions={
      "processing": true,
      "pageLength": 10,
      "pagingType": "full_numbers",
      "lengthMenu": [[ 5, 10, 20, 50,-1 ],[ 5, 10, 20, 50,"All" ]],
      "retrieve": true
    };
    this.empData=[];
    this.empData=this.empDetailsServiceCall.getAllrecord();
  }
  searchForm(searchObj){
    console.log(searchObj);
    this.flag=false;
    if (searchObj.age && searchObj.gender) {
      console.log("Both selected");
      this.filteredData=this.empData.filter(emp=> emp.age==searchObj.age && emp.gender==searchObj.gender);
    }
    else if ( searchObj.gender && !searchObj.age){
      this.filteredData=this.empData.filter(emp=> emp.gender==searchObj.gender);
      console.log("only gender Selected");
    }
    else if(!searchObj.gender && searchObj.age){
      console.log("only age Selected");
      this.filteredData=this.empData.filter(emp=> emp.age==searchObj.age);
    }
    else{
      console.log("Nothing Selected");
      this.filteredData=[];
      this.flag=true;
      
    }
    console.log(this.filteredData)
    if(this.filteredData.length!=0){
      this.errorMsg="";
      $("#searchDataTable").removeClass("d-none");
      setTimeout(() => {
        this.dataTable=$(this.table.nativeElement);
        //this.dataTable.removeAttr('width').dataTable(this.dtOptions);
        this.dataTable.dataTable(this.dtOptions);
      },1000);
    }
    else if(this.flag) {
      this.errorMsg="Kindly Search either using Age/Gender/Both";
    }
    else{
      this.errorMsg="No Records Found";
    }
  }
  clearFilterData(){
    this.filteredData=[];
    $("#searchDataTable").addClass("d-none");
    this.flag=false;
    this.errorMsg="";
  }
  ngOnDestroy(){
  }
}
