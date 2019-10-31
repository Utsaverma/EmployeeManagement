import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class EmployeeDetailsService {
  public allRecord= new Array();
  getAllrecord(){
    return this.allRecord;
  }
  setAllrecord(records){
    this.allRecord=records;
  }
}