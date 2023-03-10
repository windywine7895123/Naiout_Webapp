import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListComponent } from './list/list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginComponent } from './login/login.component';
import { Book } from './service/crud.service';
import { PreviewBookComponent } from './preview-book/preview-book.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    AddBookComponent,
    ListComponent,
    EditBookComponent,
    PreviewBookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [Book],
  bootstrap: [AppComponent]
})
export class AppModule { }
