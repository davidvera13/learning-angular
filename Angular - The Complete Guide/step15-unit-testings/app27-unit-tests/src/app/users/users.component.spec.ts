import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {UserService} from "./user.service";
import {DataService} from "./data.service";

describe('UsersComponent unit test', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  // create an instance of the module for testing
  beforeEach(async ()  => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent]
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the application', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should retrieve user from user service', () => {
    fixture.detectChanges();
    // inject userservice
    let userService = fixture.debugElement.injector.get(UserService);
    console.log("userService.user", userService.user)
    console.log("component.user", component.user)
    expect(userService.user).toEqual(component.user);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display name if logged in', () => {
    fixture.detectChanges();
    let compiledComponent = fixture.debugElement.nativeElement;
    // we can overide value ... to make expect ok
    component.isLoggedIn = true;
    // we must declare value change
    fixture.detectChanges();
    expect(compiledComponent.querySelector('p').textContent).toEqual('User is : ' + component.user.name);
  });

  it('should not display name if not logged in', () => {
    fixture.detectChanges();
    let compiledComponent = fixture.debugElement.nativeElement;
    expect(compiledComponent.querySelector('p').textContent).not.toEqual('User is : ' + component.user.name);
    expect(compiledComponent.querySelector('p').textContent).toEqual('Please log in first');
  });

  it('should not get data if not called async', () => {
    fixture.detectChanges();
    let compiledComponent = fixture.debugElement.nativeElement;
    let dataService = fixture.debugElement.injector.get(DataService);

    // we are going to spy dataService method getDetails
    let spy = spyOn(dataService, "getDetails")
      .and
      .returnValue(Promise.resolve('data'));
    fixture.detectChanges();
    expect(component.data).toBe('');
  });


  // we must use async if we wait async results
  it('should get data if called async', async () => {
    fixture.detectChanges();
    let compiledComponent = fixture.debugElement.nativeElement;
    let dataService = fixture.debugElement.injector.get(DataService);

    // we are going to spy dataService method getDetails
    let spy = spyOn(dataService, "getDetails")
      .and
      .returnValue(Promise.resolve('data'));
    fixture.detectChanges();
    // we must wait until async task complete
    await fixture.whenStable().then(() => {
      expect(component.data).toBe('data');
    })
  });


  // we must use async if we wait async results
  it(`should fetch data successfully if called asynchronously by fakeAsync`, fakeAsync(() => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and
      .returnValue(Promise.resolve('data'));
    fixture.detectChanges();
    tick();
    expect(component.data).toBe('data');
  }));

});
