import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'
import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  // book: any; //for test code

  bookForm: FormGroup;
 

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,

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
        console.log("Book added successfully");
        this.ngZone.run(() => this.router.navigateByUrl('/list'))
      })
  }
}

