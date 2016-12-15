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

@Component({
    selector: 'text',
    templateUrl: './text.component.html',
    styleUrls: ['./form.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextComponent,
        multi: true,
    }]
})
export class TextComponent extends ElementBase<string> {
    @Input() public placeholder: string;

    @ViewChild(NgModel) public model: NgModel;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: ValidatorArray,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: ValidatorArray
    ) {
        super(validators, asyncValidators);
    }
}