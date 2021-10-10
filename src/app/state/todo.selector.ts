import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Todo } from '../model/todo';

export const selectTodos = createSelector(
    (state: AppState) => {
        return state.todos;
    },
    (todos: Map<number, Todo>) => {
        return Array.from(todos.values());
    },
);

export const selectTodo = (todoId: number) => createSelector(
    selectTodos,
    (todos: Array<Todo>) => todos[todoId],
);
