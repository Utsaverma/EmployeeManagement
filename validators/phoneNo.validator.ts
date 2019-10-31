
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[telephoneNumber]',
 providers: [{provide: NG_VALIDATORS, useExisting: PhoneFormat, multi: true}]
})
export class PhoneFormat implements Validator {

 validate(c: FormControl): ValidationErrors {
   const isValidPhoneNumber = /^\d{10}$/.test(c.value);
   const message = {
     'telephoneNumber': {
       'message': 'The phone number must be valid, with only 10 digits'
     }
   };
   return isValidPhoneNumber ? null : message;
 }
}