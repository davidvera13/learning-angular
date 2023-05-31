import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidators {
  // static invalidProjectName(control: FormControl): {[s: string]: boolean } | null {
  //   if(control.value === 'test')
  //     return { 'invalidProjectName' : true}
  //   return null;
  // }

  static invalidProjectName(control: FormControl): {[s: string]: boolean } | null {
    if(control.value === 'test')
      return { 'invalidProjectName' : true}
    return null;
  }

  static asyncInvalidProjectName(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'dummy')
            resolve({ 'invalidProjectName' : true});
          resolve(null);
        }, 2000)
      })
  }
}
