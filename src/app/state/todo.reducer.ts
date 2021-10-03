import { Todo } from '../model/todo';
import { createReducer, on } from '@ngrx/store';
import { addTodo } from './todo.actions';

export const initialState: ReadonlyArray<Todo> = [];

export const todosReducer = createReducer(
    initialState,
    on(addTodo, (state, { todo }) => [...state, todo])
);
