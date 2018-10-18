import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nested-groups',
  templateUrl: './nested-groups.component.html',
  styleUrls: ['./nested-groups.component.scss']
})
export class NestedGroupsComponent implements OnInit {
  myForm: FormGroup;

  private phoneGroupSchema = {
    area: ['', [Validators.required]],
    prefix: ['', [Validators.required]],
    number: ['', [Validators.required]],
  };
  formSubmitted = false;
  addAddress = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const phone = this.formBuilder.group(this.phoneGroupSchema);
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      homePhone: phone,
      phones: this.formBuilder.array([])
    });
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const newPhone = this.formBuilder.group(this.phoneGroupSchema);
    this.phoneForms.push(newPhone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }


  onSubmit() {
    this.formSubmitted = true;
    console.log(this.myForm);
  }

  displayErrors() {
    return this.myForm.touched || this.formSubmitted;
  }

  isPhoneFieldError(i): (string) => (string) => boolean {
    const phone = this.myForm.get('phones').get(i.toString());
    return (field) => (errorName) => {
      if (phone && phone.get(field) && phone.get(field).errors) {
         return phone.get(field).errors[errorName];
      } else {
        return false;
      }
    };
  }

  toggleAddress() {
    this.addAddress = !this.addAddress;
    if (this.addAddress) {
      this.myForm.addControl('address', new FormControl(''));
    } else {
      this.myForm.removeControl('address');
    }
  }

}
