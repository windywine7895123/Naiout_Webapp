import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListComponent } from './list/list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginComponent } from './login/login.component';
import { Router } from 'express';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'list', component: ListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
