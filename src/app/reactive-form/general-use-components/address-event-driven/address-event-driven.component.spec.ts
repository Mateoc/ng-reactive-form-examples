import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressEventDrivenComponent } from './address-event-driven.component';

describe('AddressEventDrivenComponent', () => {
  let component: AddressEventDrivenComponent;
  let fixture: ComponentFixture<AddressEventDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressEventDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEventDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
