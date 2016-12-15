import {
    Component,
    Input,
    Inject,
    Optional,
    ViewChild,
} from '@angular/core';

import {
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NgModel,
} from '@angular/forms';

import {ElementBase} from '../element-base';

import {ValidatorArray} from '../validate';

export interface RadioOption<T> {
    value: T;
    label: string;
}

@Component({
    selector: 'radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./form.scss', './radio-group.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RadioGroupComponent,
        multi: true,
    }]
})
export class RadioGroupComponent extends ElementBase<any> {
    @Input() public placeholder: string;
    @Input() public options: Array<RadioOption<any>>;
    
    @ViewChild(NgModel) public model: NgModel;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: ValidatorArray,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: ValidatorArray
    ) {
        super(validators, asyncValidators);
    }
    
    isSelected(option: RadioOption<any>) {
        return this.value === option.value;
    }
    
    onSelect(option: RadioOption<any>) {
        this.value = option.value;
    }
}