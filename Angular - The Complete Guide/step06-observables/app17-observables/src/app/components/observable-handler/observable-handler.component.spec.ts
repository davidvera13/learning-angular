import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableHandlerComponent } from './observable-handler.component';

describe('ObservableHandlerComponent', () => {
  let component: ObservableHandlerComponent;
  let fixture: ComponentFixture<ObservableHandlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableHandlerComponent]
    });
    fixture = TestBed.createComponent(ObservableHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
