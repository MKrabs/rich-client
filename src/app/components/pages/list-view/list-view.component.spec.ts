import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListViewComponent } from './list-view.component';
import { MockComponent } from 'ng-mocks';
import { ListViewItemComponent } from '../../organisms/list-view-item/list-view-item.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { TodoService } from '../../../services/todo.service';
import { instance, mock } from 'ts-mockito';
import { Router } from '@angular/router';

describe('ListViewComponent', () => {
    let component: ListViewComponent;
    let fixture: ComponentFixture<ListViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                MockComponent(ListViewItemComponent),
                MockComponent(ButtonComponent),
                ListViewComponent
            ],
            providers: [
                { provide: TodoService, useFactory: () => instance(mock(TodoService)) },
                { provide: Router, useFactory: () => instance(mock(Router)) }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
