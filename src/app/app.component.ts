import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Directives';
  isAvailable: boolean = true;

  // Switch case with input value
  value:any;
  getValue(event:any) {
    this.value = event.target.value;
  }
}
