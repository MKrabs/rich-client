import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectTodos } from '../../../state/todo.selector';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
})
export class ListViewComponent {
    items$ = this.store.select(selectTodos);

    constructor(private readonly store: Store,
                private readonly router: Router) {
    }

    async showDetails(id: number) {
        await this.router.navigate(['item-view', id]);
    }

    async createNewTodoNote() {
        await this.router.navigate(['item-edit']);
    }
}
