import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputCheckGroupComponent } from './input-check-group.component';

describe('InputCheckGroupComponent', () => {
  let component: InputCheckGroupComponent;
  let fixture: ComponentFixture<InputCheckGroupComponent>;

  beforeEach(waitForAsync(() => {
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
