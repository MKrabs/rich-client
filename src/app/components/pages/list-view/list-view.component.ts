import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../../model/todo';
import { TodoService } from '../../../services/todo.service';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
})
export class ListViewComponent implements OnInit {
    items: Todo[];

    constructor(private readonly todoService: TodoService,
                private readonly router: Router) {
    }

    async ngOnInit() {
        this.items = await this.todoService.getAll();
    }

    async showDetails(id: number) {
        await this.router.navigate(['item-view', id]);
    }

    async createNewTodoNote() {
        await this.router.navigate(['item-edit']);
    }
}
