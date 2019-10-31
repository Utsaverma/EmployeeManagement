import {Injectable, EventEmitter} from '@angular/core';
import { EmpDataModel } from './shared.model';

// @Injectable makes to available services in root level.
@Injectable({providedIn:'root'})
export class SharedService {
  allRecord = new EventEmitter<EmpDataModel>();
  setAllRecord(record){
    this.allRecord=record;
  }
  getRecord(){
    return this.allRecord;
  }
}