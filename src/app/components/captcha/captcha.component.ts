import {Component, OnInit, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';

import {Observable} from 'rxjs';

import {ElementBase} from '../form/element-base';

import {CaptchaService} from '../../services';

@Component({
    selector: 'captcha',
    templateUrl: './captcha.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CaptchaComponent,
        multi: true,
    }]
})
export class CaptchaComponent extends ElementBase<string> implements OnInit {
    public key: Observable<string>;

    @ViewChild(NgModel) public model: NgModel;
    
    constructor(private service: CaptchaService) {
        super([], []);
    }
    
    ngOnInit() {
        this.key = this.service.getCaptchaKey();
    }
    
    onResponse(response) {
        this.value = response;
    }
}