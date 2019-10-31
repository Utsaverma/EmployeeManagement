
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[EmaiId]',
 providers: [{provide: NG_VALIDATORS, useExisting: EmailFormat, multi: true}]
})
export class EmailFormat implements Validator {

 validate(c: FormControl): ValidationErrors {
   const isValidEmailId = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c.value);
   const message = {
     'EmaiId': {
       'message': 'Email ID must be valid'
     }
   };
   return isValidEmailId ? null : message;
 }
}