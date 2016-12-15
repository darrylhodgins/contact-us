import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public reason: string = '';

  public responseRequired: boolean;
  
  onSubmit() {
    debugger;
  }
}
