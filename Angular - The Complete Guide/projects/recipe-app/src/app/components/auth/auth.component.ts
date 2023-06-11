import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {AuthResponse} from "../../model/authResponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode: boolean;
  isLoading: boolean;
  error: any;

  constructor(private authService: AuthService,
              private router: Router) {
    this.isLoginMode = false;
    this.isLoading = false;
    this.error = null
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.error = null;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    console.log(form);
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.email;
    let authObservable = new Observable<AuthResponse>();
    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signUp(email, password)
    }

    // same observable used in 2 calls
    authObservable.subscribe({
      next: authResponse => {
        console.log(authResponse);
        this.isLoading = false
        this.router.navigate(['./recipes']).then()
      },
      error: (error) => {
        console.log(error);
        this.error = error;
        // too much logic is provided in the component, it could be handled in service ...
        // switch (error.error.error.message) {
        //   case 'EMAIL_EXISTS':
        //     this.error = "Email already exists in database";
        //     break;
        //   case 'OPERATION_NOT_ALLOWED':
        //     this.error = "Operation is not allowed";
        //     break;
        //   case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        //     this.error = "Too many attempts ... try later";
        //     break;
        // }
        this.isLoading = false
      },
      complete: () => console.log("Done !")
    });
    form.reset();

  }
}
