import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo';

export enum Action {
    LoadTodos = '[App] Load Todos',
    LoadTodosSuccess = '[Todo Api] Load Todos Success',
    LoadTodosError = '[Todo Api] Load Todos Error',
    AddTodo = '[Item Edit] Add Todo',
    ToggleTodo = '[Item View] Toggle Todo',
    UpdateTodo = '[Item Edit] Update Todo',
    SaveTodo = '[Todo Api] Save Todo',
    SaveTodoError = '[Todo Api] Save Todo Error',
    FindTodoError = '[Todo Api] Find Todo Error',
}

export const loadTodos = createAction(
    Action.LoadTodos
);

export const loadTodosSuccess = createAction(
    Action.LoadTodosSuccess,
    props<{ todos: Todo[] }>(),
);

export const loadTodosError = createAction(
    Action.LoadTodosError,
    props<{ message: string }>(),
);

export const addTodo = createAction(
    Action.AddTodo,
    props<{ todo: Todo }>(),
);

export const toggleTodo = createAction(
    Action.ToggleTodo,
    props<{ todoId: number }>(),
);

export const updateTodo = createAction(
    Action.UpdateTodo,
    props<{ todo: Todo }>(),
);

export const saveTodo = createAction(
    Action.SaveTodo,
    props<{ todo: Todo }>(),
);

export const saveTodoError = createAction(
    Action.SaveTodoError,
    props<{ message: string }>(),
);

export const findTodoError = createAction(
    Action.FindTodoError,
    props<{ message: string }>(),
);
