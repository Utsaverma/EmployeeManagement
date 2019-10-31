
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[empName]',
 providers: [{provide: NG_VALIDATORS, useExisting: EmpNameFormat, multi: true}]
})
export class EmpNameFormat implements Validator {

 validate(c: FormControl): ValidationErrors {
   const isValid = /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(c.value);
   const message = {
     'empName': {
       'message': 'Employee Name should be valid'
     }
   };
   return isValid ? null : message;
 }
}