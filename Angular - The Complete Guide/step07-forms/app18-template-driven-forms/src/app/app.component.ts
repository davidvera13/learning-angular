import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app18-template-driven-forms';
  @ViewChild('form') signupForm: NgForm | undefined;
  defaultQuestion: string;
  questionAnswer: string;
  genders: string[];

  isSubmitted: boolean
  // creating a javascript object: it could be in a model class
  user: {
    username: string,
    email: string,
    secretQuestion: string,
    answer: string,
    gender: string
  } | undefined;

  constructor() {
    this.defaultQuestion = "pet";
    this.questionAnswer = "";
    this.genders = [ "male", "female"]
    this.isSubmitted = false;

  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    // 1st solution: not the best, it override all inputs
    // this.signupForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "john@john.com"
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'pretty cat...',
    //   gender: 'male'
    // })

    // 2nd solution: path only specific values in form
    this.signupForm?.form.patchValue({
        userData: {
          username: suggestedName,
        }
    })

  }

  // onSubmit(form: HTMLFormElement) {
  // without local reference assigned to ngFOrm, we retrieve an HTMLFormElement object
  // we are getting NgFOrm object instead

  // onSubmit(form: NgForm) {
  //   console.log("onSubmit() called");
  //   console.log(form);
  // }




  onSubmit() {
    console.log("onSubmit() called");
    console.log(this.signupForm)
    this.isSubmitted = true;
    this.user = {
      username: this.signupForm?.value.userData.username,
      email: this.signupForm?.value.userData.email,
      secretQuestion: this.signupForm?.value.secret,
      answer: this.signupForm?.value.questionAnswer,
      gender: this.signupForm?.value.gender
    }
    // reset form ..
    this.signupForm?.resetForm();
  }
}
