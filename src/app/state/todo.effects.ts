import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import {
    Action,
    addTodo, findTodoError,
    loadTodosError,
    loadTodosSuccess, saveTodo,
    saveTodoError, toggleTodo,
    updateTodo
} from './todo.actions';
import { mergeMap } from 'rxjs';

@Injectable()
export class TodoEffects {
    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(Action.LoadTodos),
        mergeMap(() => this.todoService.getAll()
            .then(
                todos => {
                    return loadTodosSuccess({ todos });
                },
                _ => loadTodosError({ message: 'someError' })
            ),
        ),
    ));

    saveTodo$ = createEffect(() => this.actions$.pipe(
        ofType(addTodo, updateTodo),
        mergeMap(action => this.todoService.saveItem(action.todo)
            .then(
                todo => saveTodo({ todo }),
                _ => saveTodoError({ message: 'someError' }),
            )
        )
    ));

    toggleTodo$ = createEffect(() => this.actions$.pipe(
        ofType(toggleTodo),
        mergeMap(action => this.todoService.findById(action.todoId)
            .then(
                todo => this.todoService.saveItem({ ...todo, done: !todo.done })
                    .then(
                        savedTodo => saveTodo({ todo: savedTodo }),
                        _ => saveTodoError({ message: 'someError' }),
                    ),
                _ => findTodoError({ message: 'someError' }),
            ),
        ),
    ));

    constructor(private readonly actions$: Actions,
                private readonly todoService: TodoService) {
    }
}
