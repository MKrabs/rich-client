import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemViewComponent } from './components/pages/item-view/item-view.component';
import { ItemEditComponent } from './components/pages/item-edit/item-edit.component';
import { ListViewComponent } from './components/pages/list-view/list-view.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './state/todo.reducer';

@NgModule({
    declarations: [
        AppComponent,
        ItemViewComponent,
        ItemEditComponent,
        ListViewComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({ todos: todosReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
