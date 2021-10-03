import { Todo } from '../model/todo';

export interface AppState {
    todos: ReadonlyMap<number, Todo>;
}
