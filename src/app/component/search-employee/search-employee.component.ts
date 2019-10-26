import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from './../../shared/shared.service';
import { Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit,OnDestroy {
  filteredData:any=[];
  private _subscribe: Subscription;
  empData:any = [];
  constructor(private sharedService:SharedService, private http: HttpClient) { }
  ngOnInit() {
    this.http.get('assets/mock.json').subscribe(data=>{
      this.empData =data;
    });
    this.initDataTable();
    //;
    // this._subscribe=this.sharedService.allRecord.subscribe((data) => {
    //   this.empData=data;
    // });
    
  }
  initDataTable(){
    $('#example').DataTable();
    
  }
  searchForm(searchObj){
    console.log(searchObj);
    console.log(this.empData);
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
