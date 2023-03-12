import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Book } from '../service/crud.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  getId: any;
  dataForm:FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    public book: Book,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe(res => {
      this.dataForm.setValue({
        book_id:res['book_id'],
        book_name:res ['book_name'],
        book_image:res ['book_image'],
        book_type: res['book_type'], 
        book_writer: res['book_writer'],
        book_publisher: res['book_publisher'],
        book_item: res['book_item'],
        book_price: res['book_price'],
        book_detail: res['book_detail'],
      })
    })
    this.dataForm =this.formBuilder.group ({
      book_id: [''],
      book_name:[''],
      book_image:[''],
      book_type: [''], 
      book_writer: [''],
      book_publisher: [''],
      book_item: [''],
      book_price: [''],
      book_detail: [''],
    })
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void{
    this.crudService.GetBook(this.book._id).subscribe(res => {
      console.log(res)
      this.book = res;
    })
  }

  goBack(): void {
    this.location.back();
  }

}
