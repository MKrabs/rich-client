import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputFieldGroupComponent } from './input-field-group.component';

describe('InputGroupComponent', () => {
  let component: InputFieldGroupComponent;
  let fixture: ComponentFixture<InputFieldGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
