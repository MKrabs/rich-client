import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Todo } from '../model/todo';

export const selectTodos = createSelector(
    (state: AppState) => state.todos,
    (todos: Array<Todo>) => todos,
);

export const selectTodo = (todoId: number) => createSelector(
    selectTodos,
    (todos: Array<Todo>) => todos[todoId],
);
