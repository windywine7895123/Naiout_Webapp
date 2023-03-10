import { Component, OnInit, NgZone, Input } from '@angular/core';
import { Router } from '@angular/router'
import { CrudService, Book } from '../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  @Input() book?: Book;
  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private location: Location,

  ) { 
    this.bookForm = this.formBuilder.group({
      book_id:[''],
      book_name: [''],
      book_image: [''],
      book_type: [''], 
      book_writer: [''],
      book_publisher: [''],
      book_item: [''],
      book_price: [''],
      book_detail: [''],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value)
    .subscribe(()=>{
        console.log("Book edit successfully");
        this.ngZone.run(() => this.router.navigateByUrl('/list'))
      })
  }

  // goBack(): void {
  //   this.location.back();
  // }

  // save(): void {
  //   if (this.book) {
  //     this.crudService.updateBook(this.book.book_id, this.bookForm.value)
  //       .subscribe(() => this.goBack());
  //   }
  // }

}
