import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnChanges {
  _address: FormGroup;
  _groupNames: {city: string, state: string, address: string};

  @Input() groupNames: {city: string, state: string, address: string};


  @Input() address: FormGroup;


  private defaultNames = {city: 'city', state: 'state', address: 'address'};



  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.address && !changes.address.currentValue) {
      throw new Error('must provide a form group');
    }
    if (changes.address || changes.groupNames) {
      this._groupNames = (changes.groupNames ? changes.groupNames.currentValue : undefined) || this.defaultNames;
      const previousNames = (changes.groupNames ? changes.groupNames.previousValue : undefined) || this.defaultNames;
      this._address = this.getNewAddressGroup(changes.address ? changes.address.previousValue : undefined,
        changes.address.currentValue, previousNames, this._groupNames);
    }
  }

  getNewAddressGroup(previousValue: FormGroup, currentValue: FormGroup, groupNamesPreviousValue: any, groupNamesCurrentValue: any)
    : FormGroup {
    const newCurrentValue = currentValue || this._address;
    // this should deep compare is just for the example, im lazy :)
    if (previousValue || (groupNamesCurrentValue !== groupNamesPreviousValue)) {
      newCurrentValue.removeControl(groupNamesPreviousValue.city);
      newCurrentValue.removeControl(groupNamesPreviousValue.state);
      newCurrentValue.removeControl(groupNamesPreviousValue.address);
    }
    if (groupNamesCurrentValue !== groupNamesPreviousValue || !previousValue) {
      newCurrentValue.addControl(groupNamesCurrentValue.city, new FormControl(''));
      newCurrentValue.addControl(groupNamesCurrentValue.state, new FormControl(''));
      newCurrentValue.addControl(groupNamesCurrentValue.address, new FormControl(''));
    }
    return newCurrentValue;

  }
}
