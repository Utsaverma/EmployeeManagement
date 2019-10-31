import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors, FormControl } from '@angular/forms';


@Directive({
 selector: '[Addresses]',
 providers: [{provide: NG_VALIDATORS, useExisting: AtleastOneAddress, multi: true}]
})
export class AtleastOneAddress implements Validator {

 validate(form: FormGroup): ValidationErrors {

   const message = {
     'Addresses': {
       'message': 'At least one Address must be entered'
     }
   };

   const address = <FormGroup> form.get('addresses');
   const hasaddress = address && Object.keys(address.controls).length > 0;

   return hasaddress ? null : message;
 }
}