import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-todo-view',
    templateUrl: './item-view.component.html',
})
export class ItemViewComponent implements OnInit {

    id: number;
    item: Todo;

    constructor(private readonly todoService: TodoService,
                private readonly router: Router,
                readonly activatedRoute: ActivatedRoute) {
        this.id = +activatedRoute.snapshot.paramMap.get('id');
    }

    async ngOnInit() {
        this.item = await this.todoService.findById(this.id);
    }

    async onCheckboxChange() {
        this.item = await this.todoService.saveItem(this.item);
    }

    async onSave() {
        await this.todoService.saveItem(this.item);
        await this.navigateToListView();
    }

    async navigateToListView() {
        await this.router.navigate(['list-view']);
    }

    async navigateToEditScreen() {
        await this.router.navigate(['item-edit', this.id]);
    }
}
