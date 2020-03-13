import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.scss']
})
export class FpasswordComponent implements OnInit {
  signupform: FormGroup;
  userData = {
    email: '',

  };
  constructor() { 
    const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform=new FormGroup({
     email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
 
   })
  }

  ngOnInit() {
  }

}
