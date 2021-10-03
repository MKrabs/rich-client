import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo';

export const addTodo = createAction(
    'Add Todo',
    props<{ todo: Todo }>(),
);

export const toggleTodo = createAction(
    'Toggle Todo',
    props<{ todoId: number }>(),
);

export const updateTodo = createAction(
    'Update Todo',
    props<{ todo: Todo }>(),
);
