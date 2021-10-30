import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private readonly url = 'http://localhost:8080/todo';

    constructor(private readonly httpClient: HttpClient) {
    }

    getAll(): Promise<Todo[]> {
        return firstValueFrom(this.httpClient.get<Todo[]>(this.url));
    }

    findById(id: number): Promise<Todo> {
        return firstValueFrom(this.httpClient.get<Todo>(`${this.url}/${id}`));
    }

    saveItem(item: Todo): Promise<Todo> {
        return firstValueFrom(this.httpClient.post<Todo>(this.url, item));
    }
}
