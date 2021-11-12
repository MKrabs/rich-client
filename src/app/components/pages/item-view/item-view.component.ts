import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../model/todo';

@Component({
    selector: 'app-todo-view',
    templateUrl: './item-view.component.html',
})
export class ItemViewComponent {

    id: number;
    item: Todo;

    constructor(private readonly router: Router,
                activatedRoute: ActivatedRoute) {
        this.id = +activatedRoute.snapshot.paramMap.get('id');
    }

    onCheckedChange() {
        // needs to be implemented
    }

    async navigateToListView() {
        await this.router.navigate(['list-view']);
    }

    async navigateToEditScreen() {
        await this.router.navigate(['item-edit', this.id]);
    }
}
