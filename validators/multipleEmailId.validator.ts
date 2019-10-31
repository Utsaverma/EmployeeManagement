import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors, FormControl } from '@angular/forms';


@Directive({
 selector: '[EmailIds]',
 providers: [{provide: NG_VALIDATORS, useExisting: AtleastOneEmail, multi: true}]
})
export class AtleastOneEmail implements Validator {

 validate(form: FormGroup): ValidationErrors {

   const message = {
     'EmailIds': {
       'message': 'At least one Email ID must be entered'
     }
   };

   const emailId = <FormGroup> form.get('emailId');
   const hasemailId = emailId && Object.keys(emailId.controls).length > 0;

   return hasemailId ? null : message;
 }
}