import {Component, ComponentFactoryResolver, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Observable, Subscription} from "rxjs";
import {AuthResponse} from "../../model/authResponse.model";
import {Router} from "@angular/router";
import {AlertComponent} from "../commons/alert/alert.component";
import {PlaceHolderDirective} from "../../directives/place-holder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy{
  isLoginMode: boolean;
  isLoading: boolean;
  error: any;
  @ViewChild(PlaceHolderDirective, { static: false }) alertHost!: PlaceHolderDirective;
  private closeSubscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private viewContainerRef: ViewContainerRef) {
    this.isLoginMode = false;
    this.isLoading = false;
    this.error = null
    this.closeSubscription = new Subscription();
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
    const password = form.value.password;
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
        // show programmatically error message instead of ngIf
        this.showErrorAlert(error);
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

  showErrorAlert(error: string) {
    // creating dynamically alert component
    const hostViewContainerRef = this.alertHost!.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent);
    // pass data and listen to event
    componentRef.instance.message = error;
    this.closeSubscription = componentRef.instance.close.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });


  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    if(this.closeSubscription)
      this.closeSubscription.unsubscribe();
  }
}
