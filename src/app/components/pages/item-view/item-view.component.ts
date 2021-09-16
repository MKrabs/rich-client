import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../model/todo';
import { TodoService } from '../../../services/todo.service';

@Component({
    selector: 'app-todo-view',
    templateUrl: './item-view.component.html',
})
export class ItemViewComponent implements OnInit {

    id: number;
    item: Todo;

    constructor(private readonly todoService: TodoService,
                private readonly router: Router,
                activatedRoute: ActivatedRoute) {
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
