import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    static readonly baseUrl = 'http://localhost:8080/todo';

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
        return this.httpClient.get<Todo[]>(TodoService.baseUrl).toPromise();
    }

    findById(id: number): Promise<Todo> {
        return this.httpClient.get<Todo>(`${TodoService.baseUrl}/${id}`).toPromise();
    }

    saveItem(item: Todo): Promise<Todo> {
        return this.httpClient.post<Todo>(TodoService.baseUrl, item).toPromise();
    }

    private copy(item: Todo): Todo {
        if (!item) {
            return item;
        }
        return JSON.parse(JSON.stringify(item));
    }
}
