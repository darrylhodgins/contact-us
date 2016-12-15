import {Directive} from '@angular/core';

import {
    AbstractControl,
    NG_VALIDATORS
} from '@angular/forms';

import {ValidationResult} from '../validate';

@Directive({
    selector: '[captcha]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CaptchaValidator,
        multi: true,
    }]
})
export class CaptchaValidator {
    validate(control: AbstractControl): ValidationResult {
        const value = control.value;
        if (value == null || value.length === 0) {
            return {captcha: 'Please validate reCAPTCHA control'};
        }
        return null;
    }
}