import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { RecaptchaModule } from 'ng2-recaptcha';

import * as components from './components';

import * as services from './services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RecaptchaModule.forRoot(),
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
    components.CaptchaValidator,
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
