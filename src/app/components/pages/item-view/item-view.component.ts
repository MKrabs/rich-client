import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../model/todo';
import { Store } from '@ngrx/store';
import { selectTodo } from '../../../state/todo.selector';
import { toggleTodo, updateTodo } from '../../../state/todo.actions';

@Component({
    selector: 'app-todo-view',
    templateUrl: './item-view.component.html',
})
export class ItemViewComponent {

    id: number;
    item: Todo;

    constructor(private readonly store: Store,
                private readonly router: Router,
                activatedRoute: ActivatedRoute) {
        this.id = +activatedRoute.snapshot.paramMap.get('id');
        this.store.select(selectTodo(this.id)).subscribe(
            todo => this.item = todo
        );
    }

    onCheckedChange() {
        this.store.dispatch(toggleTodo({ todoId: this.id }));
    }

    async navigateToListView() {
        await this.router.navigate(['list-view']);
    }

    async navigateToEditScreen() {
        await this.router.navigate(['item-edit', this.id]);
    }
}
