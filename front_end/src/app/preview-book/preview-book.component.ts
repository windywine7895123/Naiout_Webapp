import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Book } from '../service/crud.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-preview-book',
  templateUrl: './preview-book.component.html',
  styleUrls: ['./preview-book.component.css']
})
export class PreviewBookComponent implements OnInit {
  books$!: Observable<Book[]>;
  private searchTerms = new Subject<string>();

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.books$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.crudService.searchBooks(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
