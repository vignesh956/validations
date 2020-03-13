import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as data from '../../assets/dialCodes.json';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordType = 'password';
  passwordIcon = 'eye-off';
  passwordTitle='show-password';
  signupform: FormGroup;
  userData = {
    'firstName': '', 'lastName': '', 'email': '','mobile':'',
    'password': '', 'retypePassword': '', 'agreeTerms': 'false',
  };
  retypeCond='false';
  signupDone=false;
  
  countryCodes: any = (data as any).default;
  codeDigit:any ='';
  selectedCountry=this.countryCodes[0];

  dialCode = {
    code: 'code',
    name: 'Country'
}

  constructor() { }

  ngOnInit() {
    
    // tslint:disable-next-line: max-line-length
    const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    const MOBILEPATTERN = '^((\\+91-?)|0)?[0-9]{10}$';
    const agreeTermsPattern = 'true';
    this.retypeCond='false';
    this.signupform = new FormGroup({
      // tslint:disable-next-line: max-line-length
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      // tslint:disable-next-line: max-line-length
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      // mobile: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]),
      // tslint:disable-next-line: max-line-length
      mobile: new FormControl('', [Validators.required,Validators.pattern(MOBILEPATTERN), Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      // tslint:disable-next-line: max-line-length
      retypePassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      // validators: this.abc.bind(this),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      agreeTerms: new FormControl('', [Validators.required, Validators.pattern(agreeTermsPattern)]),
     
    });
  }
  
  signupBtn(){
    this.signupDone=true;
    console.log('email senttt')
  }
  
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
      this.passwordTitle = this.passwordTitle === 'hide-password' ? 'show-password' : 'hide-password';
  }


  dialChanged(e: any) {
    const dCode = this.countryCodes.find((code: any) => {
      return code.name === e.target.value
    });
    this.dialCode = dCode;
  }
}
