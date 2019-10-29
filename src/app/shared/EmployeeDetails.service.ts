import {Injectable, EventEmitter} from '@angular/core';

// @Injectable makes to available services in root level.
@Injectable({providedIn:'root'})
export class EmployeeDetailsService {
  allRecord = new EventEmitter<any>();
}