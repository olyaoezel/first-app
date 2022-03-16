import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit{
  genders = ['male', 'female', 'divers'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
      })

  //   this.signupForm.setValue({
  //   'username': 'test',
  //   'email': 'test@test.com',
  //   'gender': 'divers',
  //   'hobbies': []
  //   });
    
    // this.signupForm.patchValue({
    //   'username': 'test2',
     
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
  }

  get hobbyList() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

}
