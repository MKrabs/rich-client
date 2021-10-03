import { Todo } from '../model/todo';

export interface AppState {
    todos: ReadonlyArray<Todo>;
}
