import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private items: Map<number, Todo> = new Map([
        [1, {
            id: 1,
            title: 'item1',
            description: 'Need to do something',
            done: false,
        }],
        [2, {
            id: 2,
            title: 'item2',
            description: 'Need to do something',
            done: true,
        }],
        [3, {
            id: 3,
            title: 'item3',
            description: 'Need to do something',
            done: false,
        }]
    ]);

    constructor(private readonly httpClient: HttpClient) {
    }

    getAll(): Promise<Todo[]> {
        return Promise.resolve(Array.from(this.items.values()));
    }

    findById(id: number): Promise<Todo> {
        return Promise.resolve(this.copy(this.items.get(id)));
    }

    saveItem(item: Todo): Promise<Todo> {
        this.items.set(item.id, item);
        return Promise.resolve(this.copy(item));
    }

    nextFreeId(): number {
        return Array.from(this.items.values())
            .map((item) => item.id)
            .reduce((acc, value) => acc < value ? value : acc) + 1;
    }

    private copy(item: Todo): Todo {
        if (!item) {
            return item;
        }
        return JSON.parse(JSON.stringify(item));
    }
}
