import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, this.customValidator]],
      message: new FormControl('', {updateOn: 'blur'}),
      message2: new FormControl('')
    });
  }

  customValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value.toLowerCase() === 'camilo') {
      return {nameError: true};
    }
    return null;
  }


  debugModel() {
    console.log(this.myForm);
  }

}
