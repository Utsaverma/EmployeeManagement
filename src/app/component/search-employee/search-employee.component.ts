import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from './../../shared/shared.service';
import { Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {EmployeeDetailsService} from "./../../shared/EmployeeDetails.service"
declare var $;
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  filteredData:any=[];
  //private _subscribe: Subscription;
  empData:any = [];
  @ViewChild('dataTable') table : ElementRef;
  dataTable: any;
  dtOptions: any;
  constructor(private sharedService:SharedService, private http: HttpClient,private empDetailsServiceCall:EmployeeDetailsService) { }
  ngOnInit(): void {
    this.dtOptions={
      "processing": true,
      "pageLength": 10,
      "pagingType": "full_numbers",
      "lengthMenu": [[ 5, 10, 20, 50,-1 ],[ 5, 10, 20, 50,"All" ]]
    };
    // this.http.get('assets/mock.json').subscribe(data=>{
    //   this.empData =data;
    //   this.filteredData=[];
    //   this.filteredData=this.empData;
    // });
    this.empData=[]
    this.empDetailsServiceCall.allRecord.subscribe((data:{})=>{
      this.empData=data;
    })
    //;
    // this._subscribe=this.sharedService.allRecord.subscribe((data) => {
    //   this.empData=data;
    // });
    setTimeout(() => {
      this.dataTable=$(this.table.nativeElement);
      this.dataTable.dataTable(this.dtOptions);
      //this.dataTable.dataTable();
    },1000);
      
  }
  searchForm(searchObj){
    this.filteredData=this.empData;
    if (searchObj.age & searchObj.gender) {
      console.log("Both Selected");
    }
    else if ( searchObj.gender && !searchObj.age){
      console.log("only gender Selected");
    }
    else if(!searchObj.gender && searchObj.age){
      console.log("only age Selected");
    }
    else{
      console.log("Nothing Selected");
    }
  }
  clearFilterData(){
    this.filteredData=[];
  }
  ngOnDestroy(){
    //this._subscribe.unsubscribe();
  }
}
