import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilterContainerComponent} from './component/filter-container/filter-container.component';
import {UsersContainerComponent} from './component/users-container/users-container.component';
import {UserLayoutComponent} from './component/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersContainerComponent
  },
  {
    path: 'users/:id',
    component: UserLayoutComponent
  },
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
