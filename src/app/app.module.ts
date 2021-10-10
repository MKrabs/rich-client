import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputFieldGroupComponent } from './components/molecules/input-field-group/input-field-group.component';
import { ItemViewComponent } from './components/pages/item-view/item-view.component';
import { ItemEditComponent } from './components/pages/item-edit/item-edit.component';
import { ListViewItemComponent } from './components/organisms/list-view-item/list-view-item.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputFieldComponent } from './components/atoms/input-field/input-field.component';
import { ListViewComponent } from './components/pages/list-view/list-view.component';
import { InputCheckGroupComponent } from './components/molecules/input-check-group/input-check-group.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './state/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({
    declarations: [
        AppComponent,
        ItemViewComponent,
        ItemEditComponent,
        ListViewComponent,
        ListViewItemComponent,
        ButtonComponent,
        InputFieldComponent,
        InputFieldGroupComponent,
        InputCheckGroupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({ todos: todosReducer }),
        EffectsModule.forRoot([TodoEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
