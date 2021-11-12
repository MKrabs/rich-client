import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
})
export class ListViewComponent {

    constructor(private readonly router: Router) {
    }

    async showDetails(id: number) {
        await this.router.navigate(['item-view', id]);
    }

    async createNewTodoNote() {
        await this.router.navigate(['item-edit']);
    }
}
