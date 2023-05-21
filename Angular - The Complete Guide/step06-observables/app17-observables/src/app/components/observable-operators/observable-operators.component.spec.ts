import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOperatorsComponent } from './observable-operators.component';

describe('ObservableOperatorsComponent', () => {
  let component: ObservableOperatorsComponent;
  let fixture: ComponentFixture<ObservableOperatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableOperatorsComponent]
    });
    fixture = TestBed.createComponent(ObservableOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
