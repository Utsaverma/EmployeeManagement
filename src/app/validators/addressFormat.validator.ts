
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[address]',
 providers: [{provide: NG_VALIDATORS, useExisting: AddressFormat, multi: true}]
})
export class AddressFormat implements Validator {

 validate(c: FormControl): ValidationErrors {
   const isValid = /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(c.value);
   const message = {
     'address': {
       'message': 'City/State/Country name should be valid'
     }
   };
   return isValid ? null : message;
 }
}