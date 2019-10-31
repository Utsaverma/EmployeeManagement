
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[dob]',
 providers: [{provide: NG_VALIDATORS, useExisting: DOBValidate, multi: true}]
})
export class DOBValidate implements Validator {

 validate(c: FormControl): ValidationErrors {
   let isValiddob = false;
   let age:number;
   const bdate = new Date(c.value);
   const timeDiff = Math.abs(Date.now() - bdate.getTime() );
   age= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
   if(age>=18){
    isValiddob=true;
   }
   const message = {
     'dob': {
       'message': 'Employee must be above 18 years of age'
     }
   };
   return isValiddob ? null : message;
 }
}