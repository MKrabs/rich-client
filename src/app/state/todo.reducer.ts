import { Todo } from '../model/todo';
import { createReducer, on } from '@ngrx/store';
import { addTodo, toggleTodo, updateTodo } from './todo.actions';

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
    on(addTodo, addTodoReducer),
    on(toggleTodo, toggleTodoReducer),
    on(updateTodo, updateTodoReducer),
);

function addTodoReducer(state: ReadonlyMap<number, Todo>, { todo }: { todo: Todo }): Map<number, Todo> {
    const newTodo = {
        ...todo,
        id: state.size
    };

    return new Map([...state, [newTodo.id, newTodo]]);
}

function toggleTodoReducer(state: ReadonlyMap<number, Todo>, { todoId }: { todoId: number }): Map<number, Todo> {
    const todo = state.get(todoId);
    todo.done = !todo.done;

    return new Map([...state, [todo.id, todo]]);
}

function updateTodoReducer(state: ReadonlyMap<number, Todo>, { todo }: { todo: Todo }): Map<number, Todo> {
    return new Map([...state, [todo.id, todo]]);
}
