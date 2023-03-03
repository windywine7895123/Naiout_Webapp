import { Component, OnInit } from '@angular/core';
// import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Books:any = [];

  // constructor( private crudService: CrudService) { }

  ngOnInit(): void {
  //   this.crudService.GetBooks().subscribe(res => {
  //     console.log(res)
  //     this.Books = res;
  //   })
  // }
  // delete(id: any, i: any) {
  //   console.log(id)
  //     if( window.confirm('คุณต้องการจะลบใช่ไหม?')) 
  //       this.crudService.deleteBook(id).subscribe((res) => {
  //         this.Books.splice(i, 1);
  //       })
  }

}
