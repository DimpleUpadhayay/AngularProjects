import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, ControlContainer } from '@angular/forms';
import{ FormControl,FormGroup,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private fb: FormBuilder) { 
    this.loginForm=fb.group({
      email:['',Validators.required],
      password:['',Validators.required],

    });
  }

  ngOnInit() {
  }
  get get() { return this.loginForm.controls; }

  onSubmit()
  {
    console.log(this.loginForm.value);
  }


}
