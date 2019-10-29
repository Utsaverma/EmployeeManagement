
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[dob]',
 providers: [{provide: NG_VALIDATORS, useExisting: DOBValidate, multi: true}]
})
export class DOBValidate implements Validator {

 validate(c: FormControl): ValidationErrors {
   let isValiddob = false;
   const today= new Date();
   const birthDate=new Date(c.value);
   let age=today.getFullYear()-birthDate.getFullYear();
   const m= today.getMonth()-birthDate.getMonth();
   if(m<0 ||(m==0 && today.getDate() <birthDate.getDate())){
     age--;
   }
   if(age>18){
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