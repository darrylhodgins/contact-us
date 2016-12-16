import {Directive} from '@angular/core';

import {
    NG_VALIDATORS,
    FormGroup,
} from '@angular/forms';

import {ValidationResult} from '../validate';

@Directive({
    selector: '[names-validator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: NamesValidator,
        multi: true,
    }]
})
export class NamesValidator {
    validate(group: FormGroup): ValidationResult {
        const controls = Object.keys(group.controls).map(k => group.controls[k]); // this is cool.
    
        const values = controls.map(c => c.value)
            .reduce((prev, cur) => {
                prev[cur || ''] = true;
                return prev;
            },
            {});
            
        if (Object.keys(values).length > 1) {
            return {names: 'Names must match'};
        }
        
        return null;
    }
}