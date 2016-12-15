import {Directive} from '@angular/core';
// 99% of the time working in Angular is forgetting to import things.
import {
    AbstractControl,
    NG_VALIDATORS
} from '@angular/forms';

import {ValidationResult} from '../validate';

@Directive({
    selector: '[email]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidator,
        multi: true,
    }]
})
export class EmailValidator {
    validate(control: AbstractControl): ValidationResult {
        const value = control.value;
        // Don't have to validate the empty case since 'required' validator is already handled
        if (value == null || value.length === 0) {
            return null;
        }
        
        const expr = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/i;
        if (expr.test(value)) {
            return null; // success
        }

        return {email: 'Please enter a valid email address'};
    }
}