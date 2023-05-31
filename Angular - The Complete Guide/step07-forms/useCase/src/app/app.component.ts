import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "./custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'useCase';
  projectForm: FormGroup;

  constructor() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        'my project..',
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName()
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    })
  }

  onSaveProject() {

  }
}
