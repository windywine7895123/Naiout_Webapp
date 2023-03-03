import { Component, OnInit } from '@angular/core';
import { CrudService, Book } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Books:any = [];
  constructor(
    private crudService: CrudService,
    
  ) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books = res;
    })
  }

}
