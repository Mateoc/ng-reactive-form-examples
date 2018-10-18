import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounce, filter} from 'rxjs/operators';


@Component({
  selector: 'app-address-event-driven',
  templateUrl: './address-event-driven.component.html',
  styleUrls: ['./address-event-driven.component.scss']
})
export class AddressEventDrivenComponent implements OnInit {


  address: FormGroup;

  @Input('address')
  set inputAddress(address: {city: string, state: string, address: string}) {
    const _city = (address ? address.city : undefined) || '';
    const _state = (address ? address.state : undefined) || '';
    const _address = (address ? address.address : undefined) || '';
    this.address = this.fb.group({
      city: [_city, [Validators.required, this.customValidator]],
      state: [_state, [Validators.required]],
      address: [_address, [Validators.required]]
    });
    this.address.valueChanges.pipe(filter(addresspropect => addresspropect.city && addresspropect.state && addresspropect.address)).
    subscribe((validAddress) => this.change.emit(validAddress));
  }
  @Output('onAddressChange') change: EventEmitter<{city: string, state: string, address: string}> =
    new EventEmitter<{city: string, state: string, address: string}>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  customValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value.toLowerCase() === 'camilo') {
      return {nameError: true};
    }
    return null;
  }

}
