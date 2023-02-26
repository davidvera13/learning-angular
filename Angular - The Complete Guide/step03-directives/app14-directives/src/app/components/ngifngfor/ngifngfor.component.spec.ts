import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifngforComponent } from './ngifngfor.component';

describe('NgifngforComponent', () => {
  let component: NgifngforComponent;
  let fixture: ComponentFixture<NgifngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifngforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
