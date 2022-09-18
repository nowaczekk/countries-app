import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SingleItemComponent } from './components/single-item/single-item.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: ':id', component: SingleItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
