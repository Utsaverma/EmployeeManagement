
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[empId]',
 providers: [{provide: NG_VALIDATORS, useExisting: EmployeeIDFormat, multi: true}]
})
export class EmployeeIDFormat implements Validator {

 validate(c: FormControl): ValidationErrors {
   const isValidEmpID = /^[a-zA-Z0-9_]+$/.test(c.value);
   const message = {
     'empId': {
       'message': 'Employee ID must be valid (AlphaNumeric)'
     }
   };
   return isValidEmpID ? null : message;
 }
}