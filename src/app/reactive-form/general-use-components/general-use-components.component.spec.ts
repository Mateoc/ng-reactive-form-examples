import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUseComponentsComponent } from './general-use-components.component';

describe('GeneralUseComponentsComponent', () => {
  let component: GeneralUseComponentsComponent;
  let fixture: ComponentFixture<GeneralUseComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralUseComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralUseComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
