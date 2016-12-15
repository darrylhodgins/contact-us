import {Component, Input} from '@angular/core';

@Component({
    selector: 'validation-failures',
    templateUrl: './validation-failures.component.html',
    styleUrls: ['./validation-failures.scss']
})
export class ValidationFailuresComponent {
    @Input()
    public failures: string[] = [];

    
}