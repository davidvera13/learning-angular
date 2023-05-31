import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app19-reactive-forms';
  genders = ['male', 'female'];
  // group of controls containing form elements
  signupForm: FormGroup;
  forbiddenUsername = ['root', 'admin', 'sysop'];
  forbiddenEmailList = ['test@test.com', 'root@root.com']

  constructor() {
    // we pass a javascript json object as formgroup param
    this.signupForm = new FormGroup({
      // FormControl can have up to 3 params: initial state, validator, async validator
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        'email': new FormControl(
          null,
          [ Validators.required, Validators.email],
          this.forbiddenEmailValidator()),
      }),
      'gender': new FormControl('male'),
      // we want to let user add hobbies dynamically
      'hobbies': new FormArray([])
    });

    // we can subscribe to form
    this.signupForm.valueChanges.subscribe(
      (value) => console.log("valueChanges >>" + value));
    // and check status...
    this.signupForm.statusChanges.subscribe(
      (status) => console.log("statusChanges >> " + status));

    // we can also set values in form with default values
    // note: we can use patchValue if we plan to set some values of the form not all
    this.signupForm.setValue({
      userData: {
        username: "john wick",
        email: "john@wick.com"
      },
      gender: "male",
      hobbies: []

    })
  }

  ngOnInit(): void {

  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    // we don't need local reference to get the form inputs. We can get data from java script object (FormGroup)
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null);
    // we add a control to an array of control, we need to synchronise with html part
    // by adding a directive
    (<FormArray> this.signupForm.get('hobbies')).push(control);
  }

  // we want to create a validator that checks input value
  forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} | null {
    if(this.forbiddenUsername.indexOf(control.value) !== -1)
      return  {isValidUsername: true}
    return null;
  }

  // for checking async values from a server for instance, we can use promise or observable
  forbiddenEmailValidator(): AsyncValidatorFn  {
    return (control: AbstractControl): Promise<ValidationErrors | null> =>
      new Promise( (resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          }
          else {
            resolve(null);
          }
        }, 1500);
      });
    }
}
