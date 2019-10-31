import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors, FormControl } from '@angular/forms';


@Directive({
 selector: '[telephoneNumbers]',
 providers: [{provide: NG_VALIDATORS, useExisting: AtleastOneNumber, multi: true}]
})
export class AtleastOneNumber implements Validator {

 validate(form: FormGroup): ValidationErrors {

   const message = {
     'telephoneNumbers': {
       'message': 'At least one telephone number must be entered'
     }
   };

   const phoneNumbers = <FormGroup> form.get('phoneNumbers');
   const hasPhoneNumbers = phoneNumbers && Object.keys(phoneNumbers.controls).length > 0;

   return hasPhoneNumbers ? null : message;
 }
}