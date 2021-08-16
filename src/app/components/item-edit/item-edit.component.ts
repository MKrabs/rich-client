import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-todo-edit',
    templateUrl: './item-edit.component.html',
})
export class ItemEditComponent implements OnInit {

    id: number;
    item: Todo;

    constructor(private readonly todoService: TodoService,
                private readonly router: Router,
                readonly activatedRoute: ActivatedRoute) {
        this.id = +activatedRoute.snapshot.paramMap.get('id');
        this.item = { id: this.id, title: '', description: '', done: false }
    }

    async ngOnInit() {
        this.item = await this.todoService.findById(this.id) || this.item;
    }

    async onSubmit() {
        await this.todoService.saveItem(this.item);
        await this.navigateToListView();
    }

    async navigateToListView() {
        await this.router.navigate(['item-view', this.id]);
    }
}
