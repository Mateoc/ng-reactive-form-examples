import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  submited = false;
  countries = ['USA', 'Canada', 'Colombia'];

  model = {
    name: '',
    country: null,
    phone: '555-555-55',
    address: 'fake street 123'
  };

  onSubmit(form) {
    this.submited = true;
    // extra custom validation
    console.log(form);
  }

  /*
    async(){
      model.name = camilo
    }
   */
}
