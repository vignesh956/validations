import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.component.html',
  styleUrls: ['./repassword.component.scss']
})
export class RepasswordComponent implements OnInit {
  signupform: FormGroup;
  userData = {
  password: '',
    retypePassword: '',
  };
  signupBtn=false;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    Router;
 
    this.signupform = new FormGroup({
   
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      // tslint:disable-next-line: max-line-length
      retypePassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  
    });
  }
  

  myFunction() {
    console.log(this.signupform);
    if (this.signupform.invalid) {
      return;
    }
  }
}

  


