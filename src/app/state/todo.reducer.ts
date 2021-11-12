import { Todo } from '../model/todo';
import { createReducer } from '@ngrx/store';

export const initialState: ReadonlyMap<number, Todo> = new Map([
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

export const todosReducer = createReducer(
    initialState,
);
