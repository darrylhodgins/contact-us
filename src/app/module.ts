import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ReCaptchaModule} from 'angular2-recaptcha';

import * as components from './components';

import * as services from './services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ReCaptchaModule,
  ],
  declarations: [
    components.AppComponent,
    components.DropdownComponent,
    components.TextComponent,
    components.MultilineTextComponent,
    components.ValidationFailuresComponent,
    components.RadioGroupComponent,
    components.CaptchaComponent,
    components.EmailValidator,
    components.PhoneValidator,
  ],
  bootstrap: [
    components.AppComponent,
  ],
  providers: [
    services.ContactService,
    services.CaptchaService,
  ],
})
export class Module {}
