import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';

@Injectable()
export class CaptchaService {
    getCaptchaKey(): Observable<string> {
        return Observable.of(environment.captchaKey);
    }
}
