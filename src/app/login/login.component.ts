import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  passwordType = 'password';
  passwordIcon = 'eye-off';
  signupform: FormGroup;
  userData = {
    email: '',
    password:'',
  };
  signupform1: FormGroup;
  userData1 = {
    email: '',
    password:'',
  };
  p1=false;

  constructor() { 
    const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform1=new FormGroup({
     email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
 
   })
    
  }

  ngOnInit() {

    const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
 this.signupform=new FormGroup({
  email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
  password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
})
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}
forget(){
  this.p1=true;
}

}
