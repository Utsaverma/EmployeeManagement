import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {EmployeeDetailsService} from "./../../shared/EmployeeDetails.service"
declare var $;
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  filteredData:any=[];
  empData:any = [];
  dataSource:any;
  @ViewChild('dataTable') table : ElementRef;
  dataTable: any;
  dtOptions: any;
  constructor(private empDetailsServiceCall:EmployeeDetailsService) { }
  ngOnInit() {
    this.dtOptions={
      "processing": true,
      "pageLength": 10,
      "pagingType": "full_numbers",
      "lengthMenu": [[ 5, 10, 20, 50,-1 ],[ 5, 10, 20, 50,"All" ]]
    };
    this.empData=[]
    this.empDetailsServiceCall.allRecord.subscribe((data)=>{
      this.empData=data;
      this.dataSource=this.empData;
    });
    setTimeout(() => {
      this.dataTable=$(this.table.nativeElement);
      this.dataTable.dataTable(this.dtOptions);
    },1000);
  }
  searchForm(searchObj){
    console.log(this.dataSource)
    console.log(searchObj)
    if (searchObj.age & searchObj.gender) {
      console.log("Both selected")
      this.filteredData=this.dataSource.filter(emp=> emp.age==searchObj.age && emp.gender==searchObj.gender);
    }
    else if ( searchObj.gender && !searchObj.age){
      this.filteredData=this.dataSource.filter(emp=> emp.gender==searchObj.gender);
      console.log("only gender Selected");
    }
    else if(!searchObj.gender && searchObj.age){
      console.log("only age Selected");
      this.filteredData=this.dataSource.filter(emp=> emp.age==searchObj.age);
    }
    else{
      console.log("Nothing Selected");
      this.filteredData=[];
    }
  }
  clearFilterData(){
    this.filteredData=[];
  }
  ngOnDestroy(){
    //this._subscribe.unsubscribe();
  }
}
