import { Component, OnInit, NgZone } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {
  getId: any;
  updateForm:FormGroup;
  
  constructor (
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
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
    this.updateForm =this.formBuilder.group ({
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
      
  }
  onUpdate(): any{
    this.crudService.updateBook(this.getId, this.updateForm.value).subscribe(() =>{
      console.log('Update book');
      this.ngZone.run(() => this.router.navigateByUrl('/list'))
    }
    )
  }

  }
  