import { Todo } from '../model/todo';
import { createReducer, on } from '@ngrx/store';
import { loadTodosSuccess, saveTodo } from './todo.actions';

export const initialState: ReadonlyMap<number, Todo> = new Map([]);

export const todosReducer = createReducer(
    initialState,
    on(loadTodosSuccess, loadTodoReducer),
    on(saveTodo, saveTodoReducer),
);

function loadTodoReducer(state: ReadonlyMap<number, Todo>, { todos }: { todos: Todo[] }): Map<number, Todo> {
    return todos.reduce((map: Map<number, Todo>, todo: Todo) => {
        map.set(todo.id, todo);
        return map;
    }, new Map());
}

function saveTodoReducer(state: ReadonlyMap<number, Todo>, { todo }: { todo: Todo }): Map<number, Todo> {
    return new Map([...state, [todo.id, todo]]);
}
