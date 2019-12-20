import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator } from '@angular/forms';
import{ FormControl,FormGroup,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import {passValidator} from  './customValidation';
import {passwordValidator} from  './customValidation';
import { element } from 'protractor';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  submitted = false;
  // boxFormArray: Array<any> = [];
  // checklist = [ 
  //   {name :"Studying", id: 1},
  //   {name :"Work", id: 2},
  //   {name :"Migrate Family", id: 3},
  //   {name :"Tourist", id: 4}
  // ];
fruits:Array<String>=['work','family','studying','xyz'];


  constructor(private fb: FormBuilder) { 
    this.signupForm=fb.group({

      firstname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      lastname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      username:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,passValidator]],
      cnfpassword:['',[Validators.required,passwordValidator]],
      type:['',Validators.required],
      country:['',Validators.required],
      city:['',Validators.required],
      description:['',Validators.required],
      age:['',Validators.required],
      favFruits:this.addCheckboxcontrols(),
      er:['',Validators.required],
      prof:['',Validators.required],
      mi:['',Validators.required],
      yoe:['',Validators.required],


    }) ;          
    this.get.password.valueChanges
    .subscribe(x => this.get.cnfpassword.updateValueAndValidity())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    
  }

  ngOnInit() {
  }

    // convenience getter for easy access to form fields
  get get() { return this.signupForm.controls; }

  onSubmit()
  {
    console.log(this.signupForm.value);
    
    this.submitted = true;

       // stop here if form is invalid
        // if (this.signupForm.invalid) {
        //     return;
        // }

        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value))

      
      
    }

//     onChange(box:string, isChecked: boolean) {
//       if(isChecked) {
//         this.boxFormArray.push(box);
//       } else {
//         let index = this.boxFormArray.indexOf(box);
//         this.boxFormArray.splice(index,1);
//       }
//   }

//   duplicate() {
//     console.log(this.boxFormArray);
  //}
  addCheckboxcontrols()
  {
const arr =this.fruits.map(element => {
  return this.fb.control(false);
});
return this.fb.array(arr);

  
}
get checkboxArray()
{
  return <FormArray>this.signupForm.get('favFruits');
}
}
