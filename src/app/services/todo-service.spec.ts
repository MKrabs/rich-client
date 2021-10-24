import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('TodoService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
        ],
    }));

    it('should be created', () => {
        const service: TodoService = TestBed.get(TodoService);
        expect(service).toBeTruthy();
    });
});
