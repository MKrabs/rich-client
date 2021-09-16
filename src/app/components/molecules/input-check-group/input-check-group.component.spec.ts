import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckGroupComponent } from './input-check-group.component';

describe('InputCheckGroupComponent', () => {
  let component: InputCheckGroupComponent;
  let fixture: ComponentFixture<InputCheckGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCheckGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCheckGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
