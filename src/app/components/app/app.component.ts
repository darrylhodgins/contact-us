import {Component} from '@angular/core';

import {RadioOption} from '../form/components/radio-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public reason: string = '';

  public responseRequired: boolean;
  
  get responseOptions(): Array<RadioOption<boolean>> {
    return [
      {label: 'Yes', value: true},
      {label: 'No', value: false},
    ];
  }
  
  onSubmit() {
    debugger;
  }
}
