
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[pinCode]',
 providers: [{provide: NG_VALIDATORS, useExisting: PinCodeFormat, multi: true}]
})
export class PinCodeFormat implements Validator {

 validate(c: FormControl): ValidationErrors {
   const isValidPincode = /^[1-9][0-9]{5}$/.test(c.value);
   const message = {
     'pinCode': {
       'message': 'PIN Code must be valid, 6 digits only'
     }
   };
   return isValidPincode ? null : message;
 }
}