import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Book {
  _id!: String;
  book_name!: String;
  book_price!: Number;
  book_writer!: String;
  book_image!: String;
  book_type!: String;
  book_publisher!: String;
  book_detail!: String;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Node/Express API
  REST_API: string = 'http://localhost:3000/book';

  httpHeader = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Add
  Addb
}
