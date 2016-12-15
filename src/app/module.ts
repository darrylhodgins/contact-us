import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import * as components from './components';

import * as services from './services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    components.AppComponent,
  ],
  bootstrap: [components.AppComponent],
  providers: [
    services.ContactService,
  ],
})
export class Module {}
