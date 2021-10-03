import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo';

export const addTodo = createAction(
    '[Todo List] Add Todo',
    props<{ todo: Todo }>()
);
