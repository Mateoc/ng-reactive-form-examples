import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {

  name = new FormControl('');
  showModel = false;

  constructor() { }

  asyncAction() {
    setTimeout(() => {
      this.name.setValue('Ricardo');
    }, 1000 );
  }

}
