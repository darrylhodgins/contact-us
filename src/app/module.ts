import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import * as components from './components';

import * as services from './services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    components.AppComponent,
    components.DropdownComponent,
    components.TextComponent,
    components.ValidationFailuresComponent,
    components.RadioGroupComponent,
  ],
  bootstrap: [
    components.AppComponent,
  ],
  providers: [
    services.ContactService,
  ],
})
export class Module {}
