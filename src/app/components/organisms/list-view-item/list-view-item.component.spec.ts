import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListViewItemComponent } from './list-view-item.component';

describe('ListViewItemComponent', () => {
  let component: ListViewItemComponent;
  let fixture: ComponentFixture<ListViewItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
