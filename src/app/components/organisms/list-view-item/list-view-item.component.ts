import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../model/todo';

@Component({
    selector: 'app-list-view-item',
    templateUrl: './list-view-item.component.html',
    styleUrls: ['./list-view-item.component.css']
})
export class ListViewItemComponent {

    @Input()
    item: Todo;

    @Output()
    showDetails = new EventEmitter<number>();
}
