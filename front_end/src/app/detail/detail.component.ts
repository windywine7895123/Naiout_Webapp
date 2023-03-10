import { Component, OnInit } from '@angular/core';

import { CrudService } from '../service/crud.service';
import { Book } from '../service/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  constructor(
    private crudService: CrudService,
    public book: Book

  ) { }

  ngOnInit(): void {
    this.crudService.GetBook(this.book.book_id).subscribe(res => {
      console.log(res)
      this.book = res;
    })
  }

}
