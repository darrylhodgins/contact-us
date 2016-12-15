import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {CaptchaService} from '../../services';

@Component({
    selector: 'captcha',
    templateUrl: './captcha.component.html',
})
export class CaptchaComponent implements OnInit {
    public key: Observable<string>;
    
    constructor(private service: CaptchaService) {}
    
    ngOnInit() {
        this.key = this.service.getCaptchaKey();
    }
    
    onResponse(response) {
        debugger;
    }
}