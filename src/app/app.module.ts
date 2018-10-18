import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BasicComponent } from './reactive-form/basic/basic.component';
import { GroupsComponent } from './reactive-form/groups/groups.component';
import { NestedGroupsComponent } from './reactive-form/nested-groups/nested-groups.component';
import { GeneralUseComponentsComponent } from './reactive-form/general-use-components/general-use-components.component';
import { AddressComponent } from './reactive-form/general-use-components/address/address.component';
import { AddressEventDrivenComponent } from './reactive-form/general-use-components/address-event-driven/address-event-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    BasicComponent,
    GroupsComponent,
    NestedGroupsComponent,
    GeneralUseComponentsComponent,
    AddressComponent,
    AddressEventDrivenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
