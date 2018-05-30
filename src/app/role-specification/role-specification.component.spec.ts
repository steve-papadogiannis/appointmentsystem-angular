import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSpecificationComponent } from './role-specification.component';

describe('RoleSpecificationComponent', () => {
  let component: RoleSpecificationComponent;
  let fixture: ComponentFixture<RoleSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
