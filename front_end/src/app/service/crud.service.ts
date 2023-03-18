import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

export class Book {
  _id!: String;
  book_id!: Number;
  book_name!: String;
  book_price!: Number;
  book_writer!: String;
  book_image!: String;
  book_type!: String;
  book_item!: String;
  book_publisher!: String;
  book_detail!: String;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  //Node/Express API
  REST_API: string = 'http://localhost:3000/book';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Add
  AddBook(data: Book): Observable<any> {
    let API_URL = `${this.REST_API}/add-book`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get all objects
  GetBooks() {
    return this.httpClient.get(`${this.REST_API}`)
  }

  //Get single object
  GetBook(id: any): Observable<any>{
    let API_URL = `${this.REST_API}/detail/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }

  //Update
  updateBook(id: any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/edit-book/${id}`;
    return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )
  }

  //Delete
  deleteBook(id: any): Observable<any>{
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }

  //Error
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //handle client error
      errorMessage = error.error.message;
    } else {
      //handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return errorMessage;
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Book[]>(`${this.REST_API}search/?_book_name=${term}`).pipe()
  }
}
