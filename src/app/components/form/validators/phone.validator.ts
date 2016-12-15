import {Directive} from '@angular/core';

import {
    AbstractControl,
    NG_VALIDATORS
} from '@angular/forms';

import {ValidationResult} from '../validate';

@Directive({
    selector: '[phone]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PhoneValidator,
        multi: true,
    }]
})
export class PhoneValidator {
    validate(control: AbstractControl): ValidationResult {
        const value = control.value;
        // Don't have to validate the empty case since 'required' validator is already handled
        if (value == null || value.length === 0) {
            return null;
        }
        
        const expr = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
        if (expr.test(value)) {
            return null; // success
        }

        return {email: 'Please enter a valid phone number'};
    }
}