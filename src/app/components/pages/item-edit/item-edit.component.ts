import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../model/todo';

@Component({
    selector: 'app-todo-edit',
    templateUrl: './item-edit.component.html',
})
export class ItemEditComponent implements OnInit {

    constructor(private readonly router: Router,
                activatedRoute: ActivatedRoute) {
        const idString = activatedRoute.snapshot.paramMap.get('id');
        if (idString) {
            this.id = Number(idString);
        }
        this.item = { id: this.id, title: '', done: false };
    }

    id: number;
    item: Todo;

    async ngOnInit() {
        if (this.id != null) {
            // needs to be implemented
        }
    }

    async onSubmit() {
        if (this.id != null) {
            // needs to be implemented
        } else {
            // needs to be implemented
        }
        await this.navigateToListView();
    }

    private async navigateToListView() {
        await this.router.navigate(['list-view']);
    }
}
