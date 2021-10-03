import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../model/todo';
import { Store } from '@ngrx/store';
import { selectTodo } from '../../../state/todo.selector';
import { addTodo, updateTodo } from '../../../state/todo.actions';

@Component({
    selector: 'app-todo-edit',
    templateUrl: './item-edit.component.html',
})
export class ItemEditComponent implements OnInit {

    constructor(private readonly store: Store,
                private readonly router: Router,
                activatedRoute: ActivatedRoute) {
        const idString = activatedRoute.snapshot.paramMap.get('id');
        if (idString) {
            this.id = Number(idString);
        }
        this.item = { id: this.id, title: '', done: false };
    }

    id: number;
    item: Todo;

    private static copyTodo(todo: Todo): Todo {
        return JSON.parse(JSON.stringify(todo));
    }

    async ngOnInit() {
        if (this.id != null) {
            this.store.select(selectTodo(this.id)).subscribe(
                todo => this.item = ItemEditComponent.copyTodo(todo) || this.item
            );
        }
    }

    async onSubmit() {
        if (this.id != null) {
            this.store.dispatch(updateTodo({ todo: this.item }));
        } else {
            this.store.dispatch(addTodo({ todo: this.item }));
        }
        await this.navigateToListView();
    }

    private async navigateToListView() {
        await this.router.navigate(['list-view']);
    }
}
