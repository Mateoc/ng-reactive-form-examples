import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-general-use-components',
  templateUrl: './general-use-components.component.html',
  styleUrls: ['./general-use-components.component.scss']
})
export class GeneralUseComponentsComponent implements OnInit {

  myForm: FormGroup;


  address: {city: string, state: string, address: string} = {city: 'Med', state: 'Ant', address: 'my house'};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      address: this.fb.group({}),
      address1: this.fb.group({})
    });
  }

  onAddressChange(address) {
    this.address = address;
  }

}
