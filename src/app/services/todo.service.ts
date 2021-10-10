import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private items: Map<number, Todo> = new Map([
        [0, {
            id: 0,
            title: 'item1',
            done: false,
        }],
        [1, {
            id: 1,
            title: 'item2',
            done: true,
        }],
        [2, {
            id: 2,
            title: 'item3',
            done: false,
        }]
    ]);

    constructor(private readonly httpClient: HttpClient) {
    }

    getAll(): Promise<Todo[]> {
        return Promise.resolve(Array.from(this.items.values()));
    }

    findById(id: number): Promise<Todo> {
        return Promise.resolve(this.items.get(id));
    }

    saveItem(item: Todo): Promise<Todo> {
        let id = item.id;
        if (id == null) {
            id = this.items.size;
            item = { ...item, id};
        }

        this.items.set(id, item);

        return Promise.resolve(this.items.get(id));
    }

    private copy(item: Todo): Todo {
        if (!item) {
            return item;
        }
        return JSON.parse(JSON.stringify(item));
    }
}
