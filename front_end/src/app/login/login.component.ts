import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = 'Than@mail.com' ;
  password: string = 'th1234';

  isLogin: boolean = true;
  errorMessage: string = "";
  
  constructor(private router: Router, private http: HttpClient) { }

  onSubmit(): any {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password
    };

      this.http.post("", bodyData)
        .subscribe((resultData:any) => {
        console.log(resultData);
        if(resultData.status)
        {
            this.router.navigateByUrl('/list');
        }
        else
        { alert("Incorrext Email or Password");
          console.log("Error login");
        }
      });
  }

  ngOnInit(): void {
  }

}
