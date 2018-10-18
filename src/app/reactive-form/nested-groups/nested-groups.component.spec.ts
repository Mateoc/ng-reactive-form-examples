import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedGroupsComponent } from './nested-groups.component';

describe('NestedGroupsComponent', () => {
  let component: NestedGroupsComponent;
  let fixture: ComponentFixture<NestedGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
