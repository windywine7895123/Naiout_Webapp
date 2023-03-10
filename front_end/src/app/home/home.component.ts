import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Books:any = [];
  TopBook:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.crudService.GetBooks().subscribe(res => {
      this.Books = res;
      this.TopBook = this.Books.slice(0, 3);
      console.log(this.Books);
      console.log(this.TopBook);
    })
  }

}
