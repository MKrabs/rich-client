import { Component, OnInit } from '@angular/core';
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
        this.item = { id: this.id, title: '', description: '', done: false };
    }

    async ngOnInit() {
        if (this.id) {
            this.item = await this.todoService.findById(this.id) || this.item;
        }
    }

    async onSubmit() {
        this.id = (await this.todoService.saveItem(this.item)).id;
        await this.navigateToListView();
    }

    async navigateToListView() {
        await this.router.navigate(['item-view', this.id]);
    }
}
