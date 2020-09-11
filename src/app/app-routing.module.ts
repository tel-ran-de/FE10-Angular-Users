import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilterContainerComponent} from './filter-container/filter-container.component';

const routes: Routes = [
  {
    path: 'users/first-name/:firstName',
    component: FilterContainerComponent
  },
  {
    path: 'users/age/:age',
    component: FilterContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
