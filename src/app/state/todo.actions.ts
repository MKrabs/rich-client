import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo';

export const addTodo = createAction(
    '[Item Edit] Add Todo',
    props<{ todo: Todo }>(),
);

export const toggleTodo = createAction(
    '[Item View] Toggle Todo',
    props<{ todoId: number }>(),
);

export const updateTodo = createAction(
    '[Item Edit] Update Todo',
    props<{ todo: Todo }>(),
);
