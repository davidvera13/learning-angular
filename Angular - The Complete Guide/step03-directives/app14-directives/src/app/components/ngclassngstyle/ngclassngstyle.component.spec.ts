import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassngstyleComponent } from './ngclassngstyle.component';

describe('NgclassngstyleComponent', () => {
  let component: NgclassngstyleComponent;
  let fixture: ComponentFixture<NgclassngstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassngstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassngstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
