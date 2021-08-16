import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'list-view',
        pathMatch: 'full',
    },
    {
        path: 'list-view',
        component: ListViewComponent,
    },
    {
        path: 'item-view/:id',
        component: ItemViewComponent,
    },
    {
        path: 'item-edit/:id',
        component: ItemEditComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
