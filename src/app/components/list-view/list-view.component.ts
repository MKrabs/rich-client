import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
import { Router } from '@angular/router';

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
